// @TODO: Setup
//  [ ] yarn add eslint --dev
// END-TODO

const fs = require('fs')
const yargs = require('yargs')
const inquirer = require('inquirer')
const childProccess = require('child_process')

// Validate we have a package json to work with. If not we can't do much
if (!fs.existsSync('package.json')) {
  console.error(
    'No package.json found. Make sure you are in the project root. If no package.json exists yet, run `npm init` first.'
  )
  process.exit(1)
}

const lintPackage = '@ocupop/lint-config'
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
packageJson.scripts = packageJson.scripts || {}

// Write prettier config files
const CONFIG_FILES = {
  '.eslintrc': `\
  /**
   * @type { import("eslint").Options }
   */
  {
    "extends": [
      ${lintPackage}
    ]
    // Override other rules here...
  }
  `
}

/**
 * Adds Linter to the project
 */
function addLinter() {
  // Write files
  Object.entries(CONFIG_FILES).forEach(([fileName, contents]) => {
    if (!fs.existsSync(fileName)) {
      fs.writeFileSync(fileName, contents, 'utf8')
    } else {
      console.warn(`skipping over writing ${fileName} because it already exists`)
    }
  })

  // add packages to the project
  childProccess.execSync(`npm install --save-dev ${lintPackage} eslint`, {
    stdio: 'inherit'
  })
}

/**
 * Main entry point for the application
 */
function init() {
  addLinter();
}

init();
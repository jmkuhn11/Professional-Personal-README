// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ title, description, installation, usage, license, contributing, tests, githubUsername, email }) => `

# ${title} 

` + getBadge(license) + ` 

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)


## Description

${description}

## Installation

${installation}

## Usage

${usage}

## License

The following license is being used:  ${license}

## Contributing

${contributing}

## Tests

${tests}

## Questions

Please click on the following link to see my other works in GitHub: https://github.com/${githubUsername}

My email address is ${email}. Please reach out to me if you have any questions regarding the projects or professional oppurtunities.

`;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What would you like to title your README.md?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'How would you describe your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are your installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What will your project be used for?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project require?',
    choices: ['Apache', 'Boost', 'BSD', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'No license required'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are your contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you test your project?',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Please insert your github username here:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please insert your email here:',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateReadme(answers);
            writeToFile('README.md', readmeContent);
        });
}

function getBadge(license) {

    switch(license) {

        case 'Apache':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;

        case 'Boost':
            return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;

        case 'BSD':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;

        case 'Eclipse':
            return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
            break;

        case 'GNU':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
                
        case 'IBM':
            return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
            break;
            
        case 'ISC':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;

        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;

        case 'Mozilla':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
            
        case 'No license required':
            return '';
            break;
    }

}

// Function call to initialize app
init();

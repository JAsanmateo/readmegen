// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
   return inquirer.prompt([
        {
          type: 'input',
          name: 'project_title',
          message: 'What is the title of your project?',
        },
        {
          type: 'list',
          name: 'license',
          message: 'What kind of lisence does your project have?',
          choices: ["MIT", "GNU"],
          default: ["MIT"]
        },
        {
          type: 'input',
          message: 'Please write the description for your project.',
          name: 'description'
        },
        {
          type: 'input',
          name: 'Installation',
          message: 'Please write installation instructions for your project',
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Please describe the usage for your project',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please write some credits for your project',
          },
        {
            type: 'input',
            name: 'Questions?',
            message: 'Provide an email address for questions to be directed too',
          },
      ])
};

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile("./instructions/README.md", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};

// TODO: Create a function to initialize app
questions()
.then(answers => {
    return generatePage(answers);
})

.then(data => {
    return writeFile(data);
});

// Function call to initialize app
// init();

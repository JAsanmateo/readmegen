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
          type: 'input',
          name: 'author',
          message: 'Who is the author of this project?',
        },
        {
          type: 'input',
          name: 'copyright_year',
          message: 'What is the copyright year of this project?',
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
          name: 'installation',
          message: 'Please write installation instructions for your project',
        },
        {
          type: 'input',
          name: 'github_url',
          message: 'Enter your GitHub Username',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Please describe the usage for your project',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please write some credits for your project',
          },
        {
            type: 'input',
            name: 'email',
            message: 'Provide an email address for questions to be directed too',
          },
          {
            type: 'input',
            name: 'tests',
            message: 'What kind of testing was required for this project?',
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

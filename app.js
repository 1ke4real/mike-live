#!/usr/bin/env node

const open = require('open');
const inquirer = require('inquirer');
const { execSync } = require("child_process");
const { platform } = require('os');
osType  = platform();



let headerMessage = 
`
    ███╗   ███╗██╗██╗  ██╗███████╗    ██╗     ███████╗███╗   ███╗ █████╗ ███╗   ██╗ 
    ████╗ ████║██║██║ ██╔╝██╔════╝    ██║     ██╔════╝████╗ ████║██╔══██╗████╗  ██║ 
    ██╔████╔██║██║█████╔╝ █████╗      ██║     █████╗  ██╔████╔██║███████║██╔██╗ ██║ 
    ██║╚██╔╝██║██║██╔═██╗ ██╔══╝      ██║     ██╔══╝  ██║╚██╔╝██║██╔══██║██║╚██╗██║ 
    ██║ ╚═╝ ██║██║██║  ██╗███████╗    ███████╗███████╗██║ ╚═╝ ██║██║  ██║██║ ╚████║ 
    ╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚══════╝    ╚══════╝╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ 

    Hello my name is Mike and I am a 20 year old French developer, curious to learn,
    passionate about code and self-taught.
    
    This is the project with inquirier to make a terminal with my resume, beaucose
    i like the terminal.

    Author: Mike Leman.
    
`;


console.log(headerMessage);

inquirer.prompt([
    
    {
        type: 'list',
        message: 'What do you choose?',
        name: 'choice',
        choices: ["Send me a email", "See my porfolio","Download my resume"],
        
    }
])
.then(answers => {
    
    if (answers.choice === 'Send me a email') {
        open('mailto:mikeeleman@gmail.com');  
    }
    if (answers.choice === 'See my porfolio') {
         open("https://1ke4real.github.io/Portfolio-terminal")
    }
    
    if (answers.choice === 'Download my resume') {
        open("http://myreader.toile-libre.org/cvmikelm.pdf");
    }
});

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const generateHTML = require ("./util/generateHtml");

// let team = [];

// Pick job Title Defines Role. Loop at end of each promt
const jobTitle = [
  {
    type: "list",
    name: "job",
    message: "Job title?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

// Questions for Manager card

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Manager's Name?",
  },
  {
    type: "input",
    name: "id",
    message: "Manager Id?",
  },
  {
    type: "input",
    name: "email",
    message: "Manager Email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Manager office number?",
  },
  {
    type: "list",
    name: "addMore",
    message: "Would you like to add another Team member?",
    choices: ["yes", "no"],
  },



];

//    Questions for Engineer Card
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Engineer's Name?",
  },
  {
    type: "input",
    name: "id",
    message: "Engineer Id?",
  },
  {
    type: "input",
    name: "email",
    message: "Engineer Email?",
  },
  {
    type: "input",
    name: "github",
    message: "Engineer Github Username?",
  },
  {
    type: "list",
    name: "addMore",
    message: "Would you like to add another Team member?",
    choices: ["yes", "no"],
  },
];
// Questions for Intern Card
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Intern's Name?",
  },
  {
    type: "input",
    name: "id",
    message: "Intern Id?",
  },
  {
    type: "input",
    name: "email",
    message: "Intern Email?",
  },
  {
    type: "input",
    name: "github",
    message: "Intern school?",
  },
  {
    type: "list",
    name: "addMore",
    message: "Would you like to add another Team member?",
    choices: ["yes", "no"],
  },
];

function manager() {
  inquirer.prompt(managerQuestions).then(function (data) {});
  
   
  }


function engineer() {
  inquirer.prompt(engineerQuestions).then(function (data) {});
}

function intern() {
  inquirer.prompt(internQuestions).then(function (data) {});
}

function newTeamMember() {
  inquirer.prompt(jobTitle).then(function (data) {
    if (data.job === "Engineer") {
    
      engineer();
      
      
    } else if (data.job === "Manager") {
       
      manager();
     
    } else intern();
   
  });
}


// function makeHtml(str){
//   fs.writeFile("./index.html", str, err=>{
//      if(err) throw err
//      console.log("HTML file generated")
//   })
// }


newTeamMember();

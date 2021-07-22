const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const generateHTML = require("./util/generateHtml");

let team = [];

function newTeamMember() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's your name?",
        name: "name",
      },
      {
        type: "list",
        message: "Job title?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "input",
        message: "Employee ID number?",
        name: "id",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let roleInfo = "";
      if (role === "Engineer") {
        roleInfo = "GitHub?";
      } else if (role === "intern") {
        roleInfo = "School?";
      } else {
        roleInfo = "Office number?";
      }
      inquirer
        .prompt([
          {
            type: "input",
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo",
          },
          {
            type: "confirm",
            message: "Would you like to add more team members?",
            name: "more",
          },
        ])
        .then(function ({ roleInfo, more }) {
          let teamMember;
          if (role === "Manager") {
            teamMember = new Manager(name, id, email, roleInfo);
          } else if (role === "Engineer") {
            teamMember = new Engineer(name, id, email, roleInfo);
          } else {
            teamMember = new Intern(name, id, email, roleInfo);
          }
          team.push(teamMember);
          if (more === true) {
            newTeamMember();
          } else {
            let str = generateHTML(team);
            makeHtml(str);
          }
        });
    });
}

function makeHtml(str) {
  fs.writeFile("./sample-css/index.html", str, (err) => {
    if (err) throw err;
    console.log("HTML file generated");
  });
}

function init() {
  newTeamMember();
}

init();

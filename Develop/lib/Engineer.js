
const employee = require("./Employee");

module.exports = class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}
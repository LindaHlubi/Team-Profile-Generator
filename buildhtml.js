const fs = require("fs")
const path = require("path")
const outputpath = "./templates"
const employeeGen = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
let allEmployees = [];


// Rendering employees according to role
const renderManager = manager => {
    let output = fs.readFileSync(path.resolve(outputpath, "manager.html"), "utf8");
    var managerHtml = ""
    managerHtml = managerHtml + output.replace(/{{ name }}/g, manager.getName())
        .replace(/{{ role }}/g, manager.getRole())
        .replace(/{{ email }}/g, manager.getEmail())
        .replace(/{{ numberId}}/g, manager.getId())
        .replace(/{{ officeNumber }}/g, manager.getOfficeNumber())
    allEmployees = allEmployees + managerHtml;
    console.log(managerHtml)
};

const renderEngineer = engineer => {
    let  output = fs.readFileSync(path.resolve(outputpath, "engineer.html"), "utf8");
    var engineerHtml = ""
    engineerHtml = engineerHtml + output.replace(/{{ name }}/g, engineer.getName())
        .replace(/{{ role }}/g, engineer.getRole())
        .replace(/{{ email }}/g, engineer.getEmail())
        .replace(/{{numberId}}/g, engineer.getId())
        .replace(/{{ github }}/g, engineer.getGithub())
    allEmployees = allEmployees + engineerHtml;
    console.log(engineerHtml)
};

const renderIntern = intern => {
    let  output = fs.readFileSync(path.resolve(outputpath, "intern.html"), "utf8");
    var internHtml = ""
    internHtml = internHtml + output.replace(/{{ name }}/g, intern.getName())
        .replace(/{{ role }}/g, intern.getRole())
        .replace(/{{ email }}/g, intern.getEmail())
        .replace(/{{ numberId }}/g, intern.getId())
        .replace(/{{ school }}/g, intern.getSchool())
    allEmployees = allEmployees + internHtml;
    console.log(internHtml)
};



// Functions to create each new Constructor
function buildManager(name, numberId, email, officeNumber) {
    const manager = new Manager(name, numberId, email, officeNumber)
    renderManager(manager)
}

function buildEngineer(name, numberId, email, github) {
    const engineer = new Engineer(name, numberId, email, github)
    renderEngineer(engineer)
}

function buildIntern(name, numberId, email, school) {
    const intern = new Intern(name, numberId, email, school)
    renderIntern(intern)
}

function generatedOutpt() {
    let mainOutput = fs.readFileSync(path.resolve(outputpath, "index.html"), "utf8")
    var indexHtml = ""
    indexHtml = indexHtml + mainOutput.replace(/{{ team }}/g, allEmployees)
    let generatedFile = path.join(__dirname, 'output', "/main.html");
    console.log(generatedFile);
    fs.writeFile(generatedFile, indexHtml, function (err) {
        if (err) {
            throw new Error(err)
        }
        console.log('complete, file has been created')
    })
}

module.exports = {
    buildManager: buildManager,
    buildEngineer: buildEngineer,
    buildIntern: buildIntern,
    generatedOutpt: generatedOutpt
}
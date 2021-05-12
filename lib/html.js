const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const distDir = path.resolve(__dirname, "../dist");

/*const render = employees => {
  const html = [];

  html.push(employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

};*/

const renderManager = manager => {
  let output = fs.readFileSync(path.resolve(distDir, "index.html"), "utf8");
  output = write(output, "ManagerName", manager.getName());
  output = write(output, "ManagerRole", manager.getRole());
  output = write(output, "ManageEmail", manager.getEmail());
  output = write(output, "ManagerID", manager.getId());
  output = write(output, "ManagerNumber", manager.getOfficeNumber());
  return output;
};

const renderEngineer = engineer => {
  let output = fs.readFileSync(path.resolve(distDir, "engineer.html"), "utf8");
  output = write(output, "EngineerName", engineer.getName());
  output = write(output, "EngineerRole", engineer.getRole());
  output = write(output, "EngineerEmail", engineer.getEmail());
  output = write(output, "EngineerID", engineer.getId());
  output = write(output, "EngineerGithub", engineer.getGithub());
  return output;
};

const renderIntern = intern => {
  let output = fs.readFileSync(path.resolve(distDir, "intern.html"), "utf8");
  output = write(output, "InternName", intern.getName());
  output = write(output, "InternRole", intern.getRole());
  output = write(output, "InternEmail", intern.getEmail());
  output = write(output, "InternID", intern.getId());
  output = write(output, "InternSchool", intern.getSchool());
  return output;
};

const write = (output, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return output.replace(pattern, value);
};

module.exports = render;

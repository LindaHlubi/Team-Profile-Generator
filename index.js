//List of dependencies
const inquirer = require("inquirer");
const fs = require('fs');
let renderFile = require("./buildHtml")
const createManager = renderFile.buildManager
const createEngineer = renderFile.buildEngineer
const createIntern = renderFile.buildIntern
const render = renderFile.generatedOutpt


const roleArray = ["Manager", "Engineer", "Intern", "Complete"];

function employeeQuestions () {
    inquirer.prompt ([
   

        {
            type: "input",
            message: "What is the employee's full name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "numberId"
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "email"
        },
        {
            type: "list",
            message: "Please select a role for the new employee",
            name: "role",
            choices: roleArray,
        }
    ])
    //This section is role specific - Manager
    .then(function ({name, numberId, email, role}) {
        switch (role) {
            case "Manager":
            inquirer.prompt(
                {
                    type: "input",
                    message: "What is the Manager's office number?",
                    name: "officeNumber"
                }
                
            
            )
             //Manager response
    .then(function ({officeNumber}) {
        createManager (name,  numberId, email, officeNumber)
       // employeeTeam.push(newManager)
           addMoreEmployees() 
                     

               } 

           )
           break

           //This section is role specific - Intern
           case "Intern":         
            inquirer.prompt(
                {
                type: "input",
            message: "Which school does the intern attend?",
            name: "school",
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log('A school needs to be entered.');
                        return false;
                    }
                }
            }
            )
             //Intern response
    .then(function ({school}) {
        createIntern (name, numberId, email, school)
       // employeeTeam.push(newIntern)
         addMoreEmployees() 

                    })

             break

 //only applicable for the engineer
             case "Engineer":
     
            inquirer.prompt(
        {
            type: "input",
            message:  "What is the Engineer's GitHub Username?",
            name: "github",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log('Github username required.');
                        return false;
                    }
                }
               
                      
        })
         //Manager response
    .then(function ({github}) {
        createEngineer (name, numberId, email, github)
        //employeeTeam.push(newEngineer)
                addMoreEmployees()
            
                }
    
             )
             
             break

            }
            
        })

    }

     function addMoreEmployees() {
        inquirer.prompt(
            {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "addMoreEmployees"
            
        }).then
        (
            function ({ addMoreEmployees }) {
               // console.log("add More Employees",addMoreEmployees)
                if (addMoreEmployees) {
                    employeeQuestions()
                } else {
                    render()
                }
            }
        )
            .catch(err => {
                console.log("Error occurred while adding an employee", err)
                throw err
            })
    
     }   
          


employeeQuestions();
        
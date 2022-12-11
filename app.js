const db = require("./db/connection.js");
const cTable = require("console.table");
const DBFuncs = require('./db/DBFuncs.js');
const inquirer = require("inquirer");
const { addDepartment, getAllEmployees } = require("./db/DBFuncs.js");

async function menu(){
    const answers = await inquirer.prompt([{
        name: 'choice',
        type: 'choice',
        choices: ['View All Departments', 'Add Department', 'View All Roles', 'Add Role','View All Employees', 'Add Employee'],
        message: 'What would you like to do?'
    }])
    switch (answers.choice){
        case 'View All Departments':
            DBFuncs.getAllDepartments();
            break;
        case 'Add Department':
            addDepartment();
            break;
        case 'View All Roles':
            DBFuncs.getAllRoles();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'View All Employees':
            DBFuncs.getAllEmployees();
            break;
        case 'Add Employee':
            addEmployee();
            break
    }
}

async function addEmployee(){
    //get and format role_id name
    //         choices: [{
    //          name: 'departmentname' 
    //          id: 'department_id'
    //          }]
    const answers = await inquirer.prompt([{
        name: 'first_name',
        type: 'input',
        message: "Input new employee's first name"
    },
    {
        name: 'last_name',
        type: 'input',
        message: "Input new employee's last name"
    },
    {
        name: 'role_id',
        type: 'input',
        message: "Input new employee's role id.......",

    },
    {
        name: 'manager_id',
        type: 'input',
        message: "Input new employee's manager id........"
    }])

    DBFuncs.addEmployee(answers);
    DBFuncs.getAllEmployees();
}

async function addRole(){
    const answers = await inquirer.prompt([{
        name: 'title',
        type: 'input',
        message: "What is the title of the role?"
    },
    {
        name: 'salary',
        type: 'number',
        message: "What is the salary (numbers only)?"
    },
    {
        name: 'department_id',
        type: 'number',
        message: "Input new role's department id.......",

    }])

    DBFuncs.addRole(answers);
    DBFuncs.getAllRoles();
}

async function addDepartment(){
    const answers = await inquirer.prompt([{
        name: 'department',
        type: 'input',
        message: 'What is the name of the department?'
    }])

    DBFuncs.addDepartment(answers);
    DBFuncs.getAllDepartments();
}


//initialize application
//ask questions
//functions that will run prompts

// function viewRoles() {
//     ClassDB.findAllRoles()
//     .then(([rows]))
// }

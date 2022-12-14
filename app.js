const db = require("./db/connection.js");
const cTable = require("console.table");
const DBFuncs = require('./db/DBFuncs.js');
const inquirer = require("inquirer");
const sleep = (ms = 3000) => new Promise ((r)=> setTimeout(r,ms))


async function menu(){
    const answers = await inquirer.prompt([{
        name: 'choice',
        type: 'list',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role'],
        message: 'What would you like to do?'
    }]);
    switch (answers.choice){
        case 'View All Departments':
            DBFuncs.getAllDepartments()
            sleep();
            menu();
            break;
        case 'Add Department':
            addDepartment();
            break;
        case 'View All Roles':
            DBFuncs.getAllRoles();
            menu();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'View All Employees':
            DBFuncs.getAllEmployees();
            menu();
            break;
        case 'Add Employee':
            addEmployee();
            break
        case 'Update Employee Role':
            updateEmployee();
            break
    }
}

async function addEmployee(){
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
    }]);

    DBFuncs.addEmployee(answers);
    DBFuncs.getAllEmployees();
    menu();
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

    }]);

    DBFuncs.addRole(answers);
    DBFuncs.getAllRoles();
    menu();
}

async function addDepartment(){
    const answers = await inquirer.prompt([{
        name: 'department',
        type: 'input',
        message: 'What is the name of the department?'
    }]);

    DBFuncs.addDepartment(answers.department);
    DBFuncs.getAllDepartments();
    menu();
}

async function updateEmployee(){
    db.query("select * from employees", (err, res) => {
        if (err) throw err;
        inquirer.prompt([{
            name: 'employee_id',
            type: 'list',
            message: "Select which employee to update:",
            choices: res.map((res) => ({
                value: res.id,
                name: res.id + ' ' + res.first_name + ' ' + res.last_name,
            }))
        },{
            name:'role_id',
            type: 'input',
            message: "Enter the employee's new role id"        
         }
        ]).then ((result) => {
          DBFuncs.updateEmployee(result);
          menu();
        });
      });

}

menu();


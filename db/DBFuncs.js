//Import database connection
const db = require("./connection.js");
const cTable = require("console.table");

//class with query functions
class DBFuncs {
    constructor(connection) {
        this.connection = connection;
    }

    getAllDepartments() {
        this.connection.query("select * from departments ORDER BY id", (err, res) => {
          if (err) throw err;
          console.log("\n")
          return console.table(res);
        });
    }
    getAllRoles(){
        this.connection.query(
            `SELECT roles.id, roles.title AS Role, roles.salary AS Salary, departments.name AS Department FROM roles
            LEFT JOIN departments ON roles.department_id = departments.id`, (err, res) => {
            if (err) throw err;
            console.log("\n");
            return console.table(res);
          })
    }
    getAllEmployees(){
        this.connection.query(
        `SELECT employees.id, employees.first_name AS First, employees.last_name AS Last, roles.title AS Role, departments.name AS Department, roles.salary AS Salary,CONCAT(managers.first_name, " ", managers.last_name) AS Manager FROM employees
        LEFT JOIN roles ON employees.role_id = roles.id
        LEFT JOIN departments ON roles.department_id = departments.id
        LEFT JOIN employees as Managers ON employees.manager_id = managers.id;`, (err, res) => {
            if (err) throw err;
            console.log("\n");
            return console.table(res);
          });
    }
    addDepartment(department){
        this.connection.query("INSERT INTO departments set name = ?", department, (err, res) => {
             if (err) throw err;
             console.log("\n");
            return console.table(res);
        })
    }
    //AddARole
    addRole(role){
        this.connection.query('INSERT INTO roles set ?', role, (err, res) => {
            if (err) throw err;
            console.log("\n");
           return console.table(res);} )
    }
    //AddAEmployee
    addEmployee(employee){
        this.connection.query('INSERT INTO employees set ?', employee, (err, res) => {
            if (err) throw err;
            console.log("\n");
           return console.table(res);} )
    }
    //UpdateAnEmployee
    updateEmployee(employee){
        this.connection.query('UPDATE employees SET role_id = ? WHERE id = ?',
        [employee.role_id, employee.employee_id], (err, res) => {
            if (err) throw err;
            console.log("\n");
        return console.table(res)})
    }
}

//export class

module.exports = new DBFuncs(db);

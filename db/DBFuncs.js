//Import database connection
const db = require("./connection.js");

//class with query functions
class DBFuncs {
    constructor(connection) {
        this.connection = connection;
    }

    getAllDepartments() {
        this.connection.query("select * from departments", (err, res) => {
          if (err) throw err;
          return console.table(res);
        });
    }
    getAllRoles(){
        this.connection.query("SELECT * FROM roles", (err, res) => {
            if (err) throw err;
            return console.table(res);
          })
    }
    getAllEmployees(){
        this.connection.query("select * from employees", (err, res) => {
            if (err) throw err;
            return console.table(res);
          });
    }
    addDepartment(department){
        this.connection.query("INSERT INTO departments set ?", department, (err, res) => {
             if (err) throw err;
            return console.table(res);
        })
    }
    //AddARole
    addRole(role){
        this.connection.query('INSERT INTO roles set ?', role, (err, res) => {
            if (err) throw err;
           return console.table(res);} )
    }
    //AddAEmployee
    addEmployee(employee){
        this.connection.query('INSERT INTO employees set ?', employee, (err, res) => {
            if (err) throw err;
           return console.table(res);} )
    }
    //UpdateAnEmployee

}

//export class

module.exports = new DBFuncs(db);

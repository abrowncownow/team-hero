-- fill with employee table. Insert data into each table (3 inserts)
USE team_db;

INSERT INTO departments (name)
VALUES  ('Engineering'),
        ('Finance'),
        ('Sales'),
        ('Legal'),
        ('Information Technology');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Lead Software Enginner', 285000, 1),
        ('Senior Software Engineer', 210000, 1),
        ('Journey Software Engineer', 165000, 1),
        ('Junior Software Engineer', 80000, 1),
        ('Chief Financial Officer (CFO)', 330000, 2),
        ('Finance Officer', 275000, 2),
        ('Accountant', 140000, 2),
        ('Bookkeeper', 70000, 2),
        ('Director of Sales', 330000, 3),
        ('Sales Lead', 225000, 3),
        ('Salesman', 175000, 3),
        ('Lawyer', 195000, 4),
        ('Underwriter', 140000, 4),
        ('Chief Technical Officer (CTO)', 275000, 5),
        ('IT Manager', 155000, 5),
        ('Systems Administrator', 125000, 5),
        ('Helpdesk Technician', 65000, 5),
        ('Chief Executive Officer (CEO)', 375000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ('Bruce', 'Wayne', 18, null),
        ('Hilda', 'Johns', 1, 1),
        ('Ikra', 'Walker', 2, 2),
        ('Kaiya', 'Oliver', 3, 2),
        ('Dave', 'North', 3, 2),
        ('Giselle', 'Wilkerson', 4, 2),
        ('Tashan', 'Bautista', 5, 2),
        ('Ioan', 'Krueger', 4, 2),
        ('Chenai', 'Dennis', 5, 1),
        ('Cydney', 'Hayes', 6, 9),
        ('Alicja', 'Novak', 7, 10),
        ('Terrell', 'Tran', 8, 10),
        ('Abdurrahman', 'Person', 9, 1),
        ('Omer', 'Decker', 10, 13),
        ('Inez', 'Howell', 11, 14),
        ('Charli', 'Pena', 12, 1),
        ('Ikrah', 'Hagan', 13, 16),
        ('Jorja', 'Hail', 14, 1),
        ('Rome', 'Pope', 15, 18),
        ('Shyla', 'Chambers', 16, 19),
        ('Tamia', 'Pugh', 17, 19),
        ('Hamza', 'Skinner', 17, 19);


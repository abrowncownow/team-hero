-- fill with employee table. Insert data into each table (3 inserts)
USE team_db;

INSERT INTO departments (id, department_name)
VALUES  (1, 'Engineering'),
        (2, 'Finance'),
        (3, 'Sales'),
        (4, 'Legal'),
        (5, 'Information Technology');

INSERT INTO roles (id, title, salary, department_id)
VALUES  (1, 'Lead Software Enginner', 285000, 1),
        (2, 'Senior Software Engineer', 210000, 1),
        (3, 'Journey Software Engineer', 165000, 1),
        (4, 'Junior Software Engineer', 80000, 1),
        (5, 'Chief Financial Officer (CFO)', 330000, 2),
        (6, 'Finance Officer', 275000, 2),
        (7, 'Accountant', 140000, 2),
        (8, 'Bookkeeper', 70000, 2),
        (9, 'Director of Sales', 330000, 3),
        (10, 'Sales Lead', 225000, 3),
        (11, 'Salesman', 175000, 3),
        (12, 'Lawyer', 195000, 4),
        (13, 'Underwriter', 140000, 4),
        (14, 'Chief Technical Officer (CTO)', 275000, 5),
        (15, 'IT Manager', 155000, 5),
        (16, 'Systems Administrator', 125000, 5),
        (17, 'Helpdesk Technician', 65000, 5);
        (18, 'Chief Executive Officer (CEO)', 375000, 4)

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  (1, 'Bruce', 'Wayne', 18, null),
        (2, 'Hilda', 'Johns', 1, 1),
        (3, 'Ikra', 'Walker', 2, 2),
        (4, 'Kaiya', 'Oliver', 3, 2),
        (5, 'Dave', 'North', 3, 2),
        (6, 'Giselle', 'Wilkerson', 4, 2),
        (7, 'Tashan', 'Bautista', 5, 2),
        (8, 'Ioan', 'Krueger', 4, 2),
        (9, 'Chenai', 'Dennis', 5, 1),
        (10, 'Cydney', 'Hayes', 6, 9),
        (11, 'Alicja', 'Novak', 7, 10),
        (12, 'Terrell', 'Tran', 8, 10),
        (13, 'Abdurrahman', 'Person', 9, 1),
        (14, 'Omer', 'Decker', 10, 13),
        (15, 'Inez', 'Howell', 11, 14),
        (16, 'Charli', 'Pena', 12, 1),
        (17, 'Ikrah', 'Hagan', 13, 16),
        (18, 'Jorja', 'Hail', 14, 1),
        (19, 'Rome', 'Pope', 15, 18),
        (20, 'Shyla', 'Chambers', 16, 19),
        (20, 'Tamia', 'Pugh', 17, 19),
        (21, 'Hamza', 'Skinner', 17, 19);


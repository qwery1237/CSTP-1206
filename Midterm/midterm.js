import express, { application } from 'express';

const app = express();
const PORT = 4500;
app.use(express.json());
let employeeList = [
  {
    id: 1,
    name: 'Mike',
    email: 'mike@company.ca',
    employeeID: 100,
    department: 'IT',
    Salary: 10000,
  },
  {
    id: 2,
    name: 'Daniel',
    email: 'daniel@company.ca',
    employeeID: 101,
    department: 'HR',
    Salary: 50000,
  },
  {
    id: 3,
    name: 'Daniel',
    email: 'daniel@company.ca',
    employeeID: 101,
    department: 'HR',
    Salary: 5000,
  },
  {
    id: 4,
    name: 'Daniel',
    email: 'daniel@company.ca',
    employeeID: 101,
    department: 'HR',
    Salary: 50000000,
  },
];

app.get('/employees', (req, res) => {
  res.status(200).send(JSON.stringify(employeeList));
});
app.get('/employees/:department', (req, res, next) => {
  const { department } = req.params;
  if (!isNaN(department)) {
    return next();
  }
  const employeesList = employeeList.filter(
    (employee) => employee.department === department
  );
  if (employeesList.length === 0) {
    res.status(404).send('Employee Not Found!');
  } else {
    res.status(200).send(JSON.stringify(employeesList));
  }
});
app.get('/employees/:employeeID', (req, res) => {
  const { employeeID } = req.params;
  const employee = employeeList.find(
    (employee) => employee.employeeID === +employeeID
  );
  console.log(employee);
  if (!employee) {
    res.status(404).send('Employee Not Found!');
  } else {
    res.status(200).send(JSON.stringify(employee));
  }
});
app.post('/employees', (req, res) => {
  const { name, email, employeeID, department, Salary } = req.body;
  const newEmployee = {
    id: employeeList.length + 1,
    name,
    email,
    employeeID,
    department,
    Salary,
  };
  employeeList.push(newEmployee);
  res.status(201).redirect('/employees');
});
app.put('/employees/:employeesID', (req, res) => {
  const employeeID = req.params.employeesID;
  const employee = employeeList.find(
    (employee) => employee.employeeID === +employeeID
  );
  if (!employee) {
    res.status(404).send('Employee Not Found!');
  } else {
    const { name, email, department, Salary } = req.body;
    employee.name = name;
    employee.email = email;
    employee.department = department;
    employee.Salary = Salary;
    res.status(200).redirect('/employees');
  }
});
app.delete('/employees/:employeesID', (req, res) => {
  const employeeID = req.params.employeesID;
  if (!employeeList.some((employee) => employee.employeeID === +employeeID)) {
    res.status(404).send('Employee Not Found!');
  }
  const updatedEmployeeList = employeeList.filter(
    (employee) => employee.employeeID !== +employeeID
  );
  employeeList = updatedEmployeeList;
  res.status(204).redirect('/employees');
});
app.get('/employees/salaries/higest', (req, res) => {
  let sortedEmployeeList = [];
  const EmployeeSortedBySalary = employeeList
    .map((employee) => employee.Salary)
    .sort(function (a, b) {
      if (a > b) return -1;
      if (a === b) return 0;
      if (a < b) return 1;
    });
  EmployeeSortedBySalary.forEach((salary) => {
    sortedEmployeeList.push(
      employeeList.find((employee) => employee.Salary === salary)
    );
  });
  employeeList = sortedEmployeeList;
  res.status(200).send(JSON.stringify(employeeList));
});
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.json());

const employee = [];

app.get('/', (req, res) => {
  fs.promises
    .readFile(
      path.join('.',path.sep,'employeeList.txt'),
      'utf-8'
    )
    .then((data) => res.send(data))
    .catch(() => res.send('Server Error!'));
});
app.post('/', (req, res) => {
  employee.push(req.body);
  fs.appendFileSync(
    path.join('.',path.sep,'employeeList.txt'),
    JSON.stringify(employee[employee.length - 1]) + ',\n'
  );
  res.redirect('/');
});

app.listen(5050);

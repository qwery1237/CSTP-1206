import express, { json } from 'express';
import 'express-async-errors';
import fs from 'fs';

const app = express();
const PORT = 4000;
let userInfo = fs.readFileSync('./user_data/user_info.json', 'utf-8');
userInfo ? (userInfo = JSON.parse(userInfo)) : (userInfo = {});

app.set('view engine', 'ejs');
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static('.'));

app.get('/', (req, res) => {
  res.render('join');
});

app.post('/', (req, res) => {
  const { username, email, contact } = req.body;
  const newUser = {
    id: Object.keys(userInfo).length + 1,
    username,
    email,
    contact,
    createdAt: new Date().toString(),
  };
  userInfo[newUser.id] = newUser;
  fs.writeFileSync('./user_data/user_info.json', JSON.stringify(userInfo));
  res.status(201).redirect('/confirm');
});
app.get('/confirm', (req, res) => {
  res.render('user_confirm');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

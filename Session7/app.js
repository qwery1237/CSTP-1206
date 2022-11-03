import express, { json } from 'express';
import 'express-async-errors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 4000;
const PathUserInfo = path.join(
  '.',
  path.sep,
  'user_data',
  path.sep,
  'user_info.json'
);
let userInfo = fs.readFileSync(PathUserInfo, 'utf-8');
userInfo ? (userInfo = JSON.parse(userInfo)) : (userInfo = {});
let currentUser;

app.set('view engine', 'ejs');
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
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
    links: [
      {
        name: 'facebook',
        url: 'https://facebook.com',
        img: '../img/facebook.png',
      },
      {
        name: 'instagram',
        url: 'https://instagram.com',
        img: '../img/insta.jpeg',
      },
      {
        name: 'youtube',
        url: 'https://youtube.com',
        img: '../img/youtube.png',
      },
    ],
  };
  userInfo[newUser.id] = newUser;
  fs.writeFileSync(PathUserInfo, JSON.stringify(userInfo));
  currentUser = newUser;
  res.status(201).redirect('/confirm');
});
app.get('/confirm', (req, res) => {
  const { username, email, contact, createdAt, links } = currentUser;
  res.render('user_confirm', { username, email, contact, createdAt, links });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

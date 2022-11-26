const fs = require('fs');
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Endpoint for login
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8')
    );
    const { users } = db;

    const userFromDB = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFromDB) {
      return res.json(userFromDB);
    }

    return res.status(403).json({ message: 'Incorrect username or password' });
  } catch (e) {
    console.log('e', e);
    return res.status(500).json({ message: e.message });
  }
});

// Check authorization
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Auth Error' });
  }
  next();
});

server.use(router);

// Setup server
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});

const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../users/users-model.js');
const secrets = require('../../config/secrets.js');

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
  let user = req.body;
  console.log('************req body************', req.body);
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  db.add(user)
    .then(user => {
      const token = generateToken(user); // <<<<<<<<<<<<<<<<<<<<<<<<<

      res
        .status(201)
        .json({
          username: user.username,
          title: user.title,
          tagline: user.tagline,
          token
        });
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'Unable to create user.', error: error.message });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  db.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user); // <<<<<<<<<<<<<<<<<<<<<<<<<

        res.status(200).json({
          username: user.username,
          title: user.title,
          tagline: user.tagline,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id, // standard claim = sub
    username: user.username
  };

  const options = {
    expiresIn: '7d'
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;

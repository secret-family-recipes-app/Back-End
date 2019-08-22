const jwt = require('jsonwebtoken');

const secrets = require('../../config/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
      if (err) {
        // invalid token
        res.status(401).json({ message: 'Invalid Credentials' });
      } else {
        // valid token
        req.user = { username: decodeToken.username, id: decodeToken.subject };
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No token provided' });
  }
};

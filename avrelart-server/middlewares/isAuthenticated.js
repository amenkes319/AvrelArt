const AUTH_TOKEN = 'token';

const isAuthenticated = (req, res, next) => {
  const token = req.headers['x-auth-token'];

  if (token && token === AUTH_TOKEN) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = isAuthenticated;
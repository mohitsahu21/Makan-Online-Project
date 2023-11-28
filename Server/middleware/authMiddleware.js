const verifyAdminToken = require('./verifyAdminToken.js');

// Middleware to check authentication
const authenticate = async (req, res, next) => {
    const token = req.headers.authorization.slice(7);

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Missing token' });
    }

    // Verify and decode the token (you need to implement this function)
    
    const user = await verifyAdminToken(token);

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }

    // Attach the user to the request for later use
    req.user = user;
    console.log(user)
    next();
};

module.exports = authenticate;
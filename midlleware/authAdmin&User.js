const jwt = require('jsonwebtoken');
const TOKEN_SECRET = 'your_jwt_secret_key';

function authenticateToken(req, res, next) {
    const token = req.body.token || req.query.token || req.headers["auth-token"];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const decoded = jwt.verify(token, TOKEN_SECRET); 
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
}

function authorizeRole(role) {
    return (req, res, next) => {
        console.log("??????");
        console.log(req);
        if (req.user.role !== role) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
}

module.exports = { authenticateToken, authorizeRole };

//בודק שהתוקן עדיין בתוקף
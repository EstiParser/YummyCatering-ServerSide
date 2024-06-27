const jwt = require('jsonwebtoken');
const TOKEN_SECRET = 'your_jwt_secret_key';

function authenticateToken(req, res, next) {
    console.log("Authentication middleware triggered");
    
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract the token from the 'Bearer <token>' format

    console.log("Authorization header:", authHeader);
    console.log("Token received:", token);

    if (!token) {
        console.log("No token provided");
        return res.status(401).json({ message: 'Access denied' });
    }

    try {
        const decoded = jwt.verify(token, TOKEN_SECRET); 
        req.user = decoded;
        console.log("Token decoded:", decoded);
        next();
    } catch (err) {
        console.log("Invalid token:", err.message);
        return res.status(401).send("Invalid Token");
    }
}

function authorizeRole(role) {
    console.log("Authorization middleware triggered");
    return (req, res, next) => {
        console.log("User role:", req.user.role);
        if (req.user.role !== role) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
}

module.exports = { authenticateToken, authorizeRole };

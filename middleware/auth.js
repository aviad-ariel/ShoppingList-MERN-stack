const config = require('config');
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token) res.status(401).json({ mag: "Token Not Found, Auth Denied" });

    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        req.user = decoded;
        next();
    } catch(e){
        res.status(400).json({ mag: "Token Invalid" });
    }
};

module.exports = auth;
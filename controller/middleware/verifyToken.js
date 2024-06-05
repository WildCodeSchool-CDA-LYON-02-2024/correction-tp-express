import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, decoded) => {
                if (err) return res.status(401).send({error: 'invalid token'});
                req.user = {userID: decoded.id, username: decoded.username, role : decoded.role};
                return next()
            })
        }
    }
    res.status(401).json({error: 'invalid token'});
}

export default verifyToken
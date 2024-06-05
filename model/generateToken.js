import jwt from 'jsonwebtoken'


const generateToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY || 'secret', {
        expiresIn: process.env.SECRET_EXPIRES || '1h',
    })
}

export default generateToken;
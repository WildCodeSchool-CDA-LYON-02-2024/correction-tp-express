import {create, login as auth} from "../model/userModel.js";
import generateToken from "../model/generateToken.js";

const login = (req, res) => {
    const {login, password} = req.body;
    if (!login || !password) {
        return res.status(400).json({error: 'invalid login'});
    }
    auth(login, password)
        .then(data => {
            res.status(200).json({
                message: 'User logged in successfully',
                token: generateToken(data.user)
            })
        })
        .catch(err => res.status(400).json({error: 'invalid login'}));
}

const register = (req, res) => {
    const {login, password} = req.body;
    if (!login || !password) {
        console.log(req.body, 'BODY')
        return res.status(400).json({error: 'invalid login'});
    }
    create(login, password)
        .then(() => res.status(201).json({message: 'User registered successfully'}))
        .catch((err) => res.status(400).json({error: 'invalid login', err}))
}

const userInfo = (req, res) => {
    res.status(200).json({user: req.user});
}

export {login, register, userInfo}
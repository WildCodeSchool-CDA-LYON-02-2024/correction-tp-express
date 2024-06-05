import express from 'express';
import {login, register, userInfo} from "./controller/authController.js";
import verifyToken from "./controller/middleware/verifyToken.js";

const router = express.Router();

router.post('/login', login)
router.post('/register', register)
router.get('/user/info', verifyToken, userInfo)

export default router;
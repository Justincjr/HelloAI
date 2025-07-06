import { checkAuth, register, login, logout } from '../controllers/auth.controller.js';
import express from 'express';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/check-auth', checkAuth);

export default router;
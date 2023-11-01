import { Router } from "express";
import  controller  from '../controllers/authController.js'
import  authMiddleware   from '../middlewares/authMiddleware.js';
import  authValidator  from "../middlewares/authValidator.js"
const router = Router();


router.post('/registration', authValidator, controller.registration);
router.post('/login', controller.login);
router.post('/logout',  controller.logout)
router.get('/admin', authMiddleware, controller.getUser)

export default router;

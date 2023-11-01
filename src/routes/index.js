import { Router } from "express";
import  controller  from '../controllers/authController.js'
import  authMiddleware   from '../middlewares/authMiddleware.js';
import  authValidator  from "../middlewares/authValidator.js"
import uploadfile from "../middlewares/uploadfile.js";
import Filecontroller  from "../controllers/fileController.js"
const router = Router();


router.post('/registration', authValidator, controller.registration);
router.post('/login', controller.login);
router.post('/logout',  controller.logout)
router.get('/admin', authMiddleware, controller.getUser)
router.post('/upload', Filecontroller.upload )

export default router;

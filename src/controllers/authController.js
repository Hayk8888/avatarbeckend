import User from '../models/User.js';
import bcrypt from "bcryptjs";
import {validationResult} from "express-validator";
import sign from 'jsonwebtoken';
import {BadRequest} from '../config/errors.js';
import {CREATED_CODE, SUCCESS_CODE} from "../config/status-codes.js";
import UserServices from "../services/userServices.js";
import {secretKey} from "../config/index.js";
import userServices from "../services/userServices.js";
import tokenService from "../services/tokenService.js";

class authController {
    async registration(req, res, next) {

        try {
            const {username, password, email} = req.body
            const user = await UserServices.registration(username, password, email)
            res.status(CREATED_CODE).json(user)
        } catch (err) {
            next(err)
        }
    }

    da

    async login(req, res, next) {

        try {
            const {email, username, password} = req.body
            const user = await UserServices.login(username, password, email)

            res.cookie("refreshToken", user.refreshToken, {httpOnly: true, secure: true})
            res.status(SUCCESS_CODE).json(user)

        } catch (err) {
            next(err)
        }
    }


    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const token = await UserServices.logout(refreshToken)
            res.clearCookie("refreshToken")
            res.status(SUCCESS_CODE).json(token)
        } catch (err) {
            next(err)
        }
    }

    async getUser(req, res, next) {
        try {
            const users = await User.find()

            res.json({users: users})
        } catch (err) {
            next(err)
        }
    }
}

export default new authController();

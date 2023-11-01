import File from "../models/File.js";
import fs from "fs";
import path from "path";
import {BadRequest} from "../config/errors.js";
import {CREATED_CODE, SERVER_ERROR, SUCCESS_CODE} from "../config/status-codes.js";


class FileController {
    async upload(req, res, next) {
        try {
            const user = req.user;
            const {filename, code} = req.body


            const userDirectory = path.join(__dirname, "..", "uploads", user._id.toString())
            if (!fs.existsSync(userDirectory)) {
                fs.mkdirSync(userDirectory);
            }
            const filePath = path.join(userDirectory, filename);


            if (fs.existsSync(filePath)) {
                throw new BadRequest({message: "file is already exists"})
            }
             fs.writeFileSync(filename, code)

             const  file  = new File({
                 file:  filename,
                 userId: user._id
             });

            await file.save();

            res.status(SUCCESS_CODE).json({message:  " file upload"})



        } catch (err) {
            next(err)
            res.status(SERVER_ERROR).json({message: "Server  upload  error"})
        }
    }
}


export  default new FileController()
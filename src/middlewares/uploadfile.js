import path from "path";
import fs from "fs";
import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const Path = path.join(__dirname, "..", "uploads")
        fs.mkdir(Path, {recursive: true}, (err) => cb(err, Path))
    },

    filename: (req, file, cb) => {
        const Suffix = Date.now() + '_' + Math.round(Math.random() * 1E9)

        cb(null, file.filename + '_' + Suffix + file.originalname.match(/\.([^.]+)$/)[0])
    }
});

const upload = multer({
    storage:  storage
})


export default upload;
import express from "express";
import cors from "cors";
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import '../src/db/dbConnection.js'
import corsOptions from "./config/cors.js"
import router from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import * as path from "path";
import dotenv from "dotenv";
import   cookieParser  from 'cookie-parser';
import {cookieSecretKey} from "./config/index.js";
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class App {
    constructor() {
        this.#init()
    }

    #init() {
        this.#config()
        this.#routes()
        this.#errorHandler()
    }

    #config() {
        this.app = express();
        this.app
            .use(cors(corsOptions))
            .use(cookieParser(cookieSecretKey, { expires: new Date(Date.now() + 3600000) }))
            .use(express.json())
            .use(express.urlencoded({extended: true}))
            .use(express.static(path.join(process.cwd(), "public")))
            .set('view engine', 'ejs')
            .set('views', path.join(__dirname, "views"));
    }

    #routes() {
        this.app.use(router);
    }

    #errorHandler() {
        this.app.use(errorHandler)
    }
}

export default App
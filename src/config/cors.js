import {corsOrigins} from "./index.js";

const corsOptions = {
    origin: corsOrigins,
    credentials: true,
    allowedHeaders: [
        "Content-Type",
        "Authorization"
    ]
}

export default corsOptions;
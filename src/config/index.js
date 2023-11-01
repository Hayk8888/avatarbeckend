import dotenv from "dotenv";

dotenv.config();

export const apiPort = process.env.PORT;

export const corsOrigins = process.env.CORS_ORIGINS?.split(",");

export const secretKey = process.env.SECRETKEY

export const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET_KEY

export const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET_KEY

export  const  cookieSecretKey = process.env.COOKIE_SECRET_KEY
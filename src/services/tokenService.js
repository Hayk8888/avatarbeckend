import jwt from "jsonwebtoken"
import {accessTokenSecret, refreshTokenSecret} from "../config/index.js";
import tokenRepositories from "../repositories/tokenRepositories.js";


class TokenService extends tokenRepositories {
    constructor() {
        super()
    }

    generateTokens(payload) {
        const accessToken = jwt.sign(payload, accessTokenSecret, {
            expiresIn: "30m"
        })


        const refreshToken = jwt.sign(payload, refreshTokenSecret, {
            expiresIn: "30d"

        })
        return {accessToken, refreshToken}

    }

    validateAccessToken(token) {
        try {
            return jwt.verify(token, accessTokenSecret)
        } catch (err) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            return jwt.verify(token, refreshTokenSecret)

        } catch (err) {
            return null
        }
    }

    async saveToken(user, refreshToken) {
        const tokenData = await this.findOne({user})
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        return await this.create(user, refreshToken)
    }
    async removeToken(refreshToken) {
         return await this.deleteOne(refreshToken)
    }

    async  findToken(refreshToken) {
        return await  this.findOne(refreshToken)
    }

}

export default new TokenService()
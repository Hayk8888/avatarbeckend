import Token from "../models/Token.js";


class TokenRepositories {
    constructor() {
        this.model = Token
    }

    async create(id, refreshToken) {
        return await this.model.create({user: id, refreshToken})
    }

    async findOne(payload) {
        return this.model.findOne(payload);
    }

    async deleteOne(refreshToken) {
        return this.model.deleteOne({refreshToken})
    }

    async findAndModify(options, data) {
        return this.model.findOneAndUpdate(options, data, {new: true})
    }
}

export default TokenRepositories
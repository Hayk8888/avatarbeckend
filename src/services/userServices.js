import {BadRequest} from "../config/errors.js";
import userRepositories from "../repositories/userRepositories.js";
import bcrypt from "bcryptjs";
import tokenService from "./tokenService.js";
import UserDto from "../dto/userdto.js";

class  UserServices extends  userRepositories {
    async registration (username, password, email) {
        const candidate = await this.checkCandidate(username, email)
        if (candidate) {
            throw new BadRequest({message: "username or email in this  name or username is  verified"})
        }
        const hashPassword = bcrypt.hashSync(password, 7);

        const user =  await this.userCreate(username, email, hashPassword)
        const userDto = new UserDto(user)
        const  tokens =  tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }

    async  login (username, password, email ) {
        const  user = await this.checkUser(username, email)
        if(!user) {
            throw new BadRequest({message: `user is ${username} is not  found`})
        }

        const  isPassMatch = await bcrypt.compare(password, user.password)
        if(!isPassMatch) {
             throw new BadRequest({message: "password  dont  match"})
        }
        const userDto = new UserDto(user)
        const  tokens =  tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}

    }

    async  logout(refreshToken) {
        return await tokenService.removeToken(refreshToken)
    }
}

export default  new UserServices()
import User from "../models/User.js";


class  UserRepositories  {
    constructor() {

        this.Model = User
    }
    async checkCandidate(username, email){
        return this.Model.findOne({$or: [{username}, {email}]});
    }

    async  userCreate(username, email, password) {
          return this.Model.create({username, email, password})
    }

    async checkUser(username, email){
        return this.Model.findOne({$and: [{username}, {email}]})
    }

}


export  default UserRepositories
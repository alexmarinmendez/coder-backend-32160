import UsersDaoArray from "../daos/usersDaoArray.js"

export default class UsersService {
    constructor() {
        this.usersDao = new UsersDaoArray()
    }

    getUsers = async() => {
        return await this.usersDao.getAll()
    }

    addUser = async(user) => {
        return await this.usersDao.save(user)
    }
}
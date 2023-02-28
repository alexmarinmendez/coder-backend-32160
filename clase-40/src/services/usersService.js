// import UsersDaoArray from "../daos/usersDaoArray.js"
import UsersDaoFile from '../daos/usersDaoFile.js'

export default class UsersService {
    constructor() {
        // this.usersDao = new UsersDaoArray()
        this.usersDao = new UsersDaoFile()
    }

    getUsers = async() => {
        return await this.usersDao.getAll()
    }

    addUser = async(user) => {
        return await this.usersDao.save(user)
    }
}
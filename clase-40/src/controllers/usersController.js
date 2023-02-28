import UsersService from "../services/usersService.js"
const userService  = new UsersService()

const getUsers = async(req, res) => {
    //recibir la req
    //pedir la res a alguien, a quien? (al servicio)
    let result = await userService.getUsers()
    //enviar la res
    res.send(result)
}

const saveUser = async(req, res) => {
    //recibir la req
    let user = req.body
    //pedir la res a alguien, a quien? (al servicio)
    let result = await userService.addUser(user)
    //enviar la res
    res.send(result)
}

export default {
    saveUser, getUsers
}
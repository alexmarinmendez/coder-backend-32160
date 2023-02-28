import UsersService from "../services/usersService.js"
const userService  = new UsersService()
import UsersDTO from '../dtos/usersDto.js'

const getUsers = async(req, res) => {
    //recibir la req
    //pedir la res a alguien, a quien? (al servicio)
    let result = await userService.getUsers()
    let resultDTO = result.map(user => new UsersDTO(user))
    //enviar la res
    res.send(resultDTO)
}

const saveUser = async(req, res) => {
    //recibir la req
    let user = req.body
    //pedir la res a alguien, a quien? (al servicio)
    let result = await userService.addUser(user)
    //enviar la res
    res.send(new UsersDTO(result))
}

export default {
    saveUser, getUsers
}
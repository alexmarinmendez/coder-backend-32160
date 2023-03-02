import { userService } from "../services/service.js";

const getUsers = async(req, res) => {
    let results = await userService.get()
    res.send(results)
}

const saveUser = async(req, res) => {
    let { first_name, last_name, email } = req.body
    if (!first_name||!last_name||!email) return res.status(400).send({ error: 'Imcomplete fields' })
    let result = await userService.save({ first_name, last_name, email })
    res.send(result)
}

export default {
    getUsers, saveUser
}
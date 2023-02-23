import usersMem from '../models/usersMem.js'

export async function findUsers() {
    return usersMem.findAll()
}

export async function createUser(user) {
    return usersMem.create(user)
}
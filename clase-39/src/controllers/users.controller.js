import { findUsers, createUser } from '../services/users.service.js'

export async function getHTMLOnWire(req, res) {
    const users = await findUsers()
    // res.render('plantilla-html-onwire', {users})
    res.json({ users }) // => data-onwire
}

export async function postHTMLOnWire(req, res) {
    const user = req.body
    await createUser(user)
    res.redirect('/users/html-onwire')
}
class UsersMem {
    constructor() {
        this.users = []
    }

    findAll = async() => {
        return this.users
    }

    create = async(user) => {
        this.users.push(user)
    }
}

export default new UsersMem()   //patrón SINGLETON!!
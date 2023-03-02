export default class Repository {
    constructor(dao, model) {
        this.dao = dao
        this.model = model
    }

    get = async(params) => {
        return this.dao.get(params, this.model)
    }

    save = async(data) => {
        return this.dao.insert(data, this.model)
    }
}
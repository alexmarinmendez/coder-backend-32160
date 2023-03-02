import { mongoose } from "mongoose"
import User from './Users.js'

export default class MongoDAO {
    constructor(config) {
        this.mongoose = mongoose.connect(config.url, {
            useNewUrlParser: true
        })
            .catch(err => {
                console.log(err)
                process.exit()
            })
        
        const timestamps = {
            timestamps: {
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        }
        const userSchema = mongoose.Schema(User.schema, timestamps)
        // const productSchema = mongoose.Schema(Product.schema, timestamps)
        this.models = {
            [User.model]: mongoose.model(User.model, userSchema),
            // [Product.model]: mongoose.model(Product.model, userSchema),
        }
    }

    get = async(options, entity) => {
        if (!this.models[entity]) throw new Error('Entity not found in models')
        let results = await this.models[entity].find(options)
        return results.map(result => result.toObject())
        // return results
    }

    insert = async(document, entity) => {
        if (!this.models[entity]) throw new Error('Entity not found in models')
        try {
            let instance = new this.models[entity](document)
            let result = await instance.save()
            return result.toObject()
        } catch(err) {
            console.log(err)
            return null
        }
    }

}
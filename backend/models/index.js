const mongoose = require('mongoose')
const Schema = mongoose.Schema

newSchema = new Schema({
    name: String,
    email: String,
    password: String
})

/* cakeSchema = new Schema({
    name: String,
    tiers: String,
    icing: String,
   
})
 */
module.exports = mongoose.model('User', newSchema)
//module.exports = mongoose.model('Cake', cakeSchema)
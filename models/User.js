const moongoose =require('mongoose');
const Schema = moongoose.Schema;

const userSchema = new Schema({
    googleClientId : {
        type : String,
        required :true
    }
})

module.exports = User = moongoose.model('user',userSchema)

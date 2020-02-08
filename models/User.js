const moongoose =require('mongoose');
const Schema = moongoose.Schema;

const userSchema = new Schema({
    googleClientId : {
        type : String,
        required :true
    },
    credits :{
        type:Number,
        default :0
    }
})

module.exports = moongoose.model('users',userSchema)

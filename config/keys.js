if(process.env.NODE_ENV == 'production') {
    //For Production mode the keys will be used from prod file.
    module.exports = require('./prod')
} else {
     //For Local the keys will be used from prod file.
    module.exports = require('./dev')
}
const passport = require('passport');


module.exports = (app) => {

     //Google Login Routes
    app.get('/auth/google',passport.authenticate('google',{ scope:['profile','email']}));
    
    app.get('/auth/google/callback',passport.authenticate('google'))
    
    app.get('/api/logout',(req,res) => {
        req.logout();
        res.send({user: "User Successfully Logged Out !"})
    })
    
    app.get('/api/current_user',(req,res) => {
        res.send(req.user)
    })

    //Facebook Login Routes
    app.get('/auth/facebook',passport.authenticate('facebook'));

    app.get('/auth/facebook/callback',passport.authenticate('facebook'))
   
    
}
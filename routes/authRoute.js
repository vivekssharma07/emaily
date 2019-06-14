const passport = require('passport');


module.exports = (app) => {

     //Google Login Routes
    app.get('/auth/google',passport.authenticate('google',{ scope:['profile','email']}));
    
    app.get('/auth/google/callback',passport.authenticate('google'),(req,res) =>{
        res.redirect('/')
    })
    
    app.get('/api/logout',(req,res) => {
        req.logout();
        res.redirect('/')
    })
    
    app.get('/api/current_user',(req,res) => {
        res.send(req.user)
    })

    //Facebook Login Routes
    app.get('/auth/facebook',passport.authenticate('facebook'));

    
    app.get('/auth/facebook/callback',passport.authenticate('facebook'),(req,res) =>{
        res.redirect('/surveys')
    })
   
    
}
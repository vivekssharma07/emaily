const passport = require('passport');
const GoogleStratergy= require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const User = require('../models/User');

passport.serializeUser((user,done) => {
    done(null,user.id)
})

passport.deserializeUser((id,done) => {
     User.findById({_id:id}).then(user => {
         done(null,user)
     })
})

passport.use(new GoogleStratergy(
    {
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL : 'http://localhost:5000/auth/google/callback',
    proxy :true
    },
    async (accessToken,refreshToken,profile,done) => {
        const existingUser = await User.findOne({googleClientId:profile.id});        
        
        if(existingUser){
           return  done(null,existingUser)
          } 
        const user = await new User({googleClientId:profile.id}).save();
                  done(null,user)
    }
))

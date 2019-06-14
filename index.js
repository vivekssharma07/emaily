const express = require('express');
const passport = require('passport');
require('./services/passport')
require('./services/facebookLogin')
const app = express();
const path = require('path');
const cookieSession = require('cookie-session')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true },()=>{
    console.log("Connected to database Successfully!")
})
app.use(bodyParser.json())
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys : [keys.cookieId]
    })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoute')(app)
require('./routes/billingRoute')(app)

const PORT = process.env.PORT || 5000 ;
app.listen(PORT,()=>{
    console.log(`App is Listening to port ${PORT}`)
})
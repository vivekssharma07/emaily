const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000 ;

app.get('/',(req,res)=>{
    res.send({'text':'Hellow Buddy!'})
})


app.listen(PORT,()=>{
    console.log(`App is Listening to port ${PORT}`)
})
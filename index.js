const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000 ;

app.get('/',(req,res)=>{
    res.send({'buddy':'React and Node App about to launch !'})
})


app.listen(PORT,()=>{
    console.log(`App is Listening to port ${PORT}`)
})
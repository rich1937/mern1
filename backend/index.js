const express = require('express')
const app = express()
const port = process.env.PORT | 80
app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(port)



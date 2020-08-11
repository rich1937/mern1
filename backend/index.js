const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.connect('mongodb+srv://appuser:mangoPLZ@cluster0.0khpf.mongodb.net/node-react-starter?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true })

const app = express()
/* app.get('/',(req,res)=>{
    res.send('hello')
}) */

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT | 80
app.use('/api', require('./routes/index'))

//app.use('/cakes', require('./routes/cakes'))

app.listen(port)




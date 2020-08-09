const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://appuser:mangoPLZ@cluster0.0khpf.mongodb.net/node-react-starter?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true })
const cors = require('cors')
const app = express()
const port = process.env.PORT | 80
/* app.get('/',(req,res)=>{
    res.send('hello')
}) */

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', require('./routes/index'))

app.listen(port)




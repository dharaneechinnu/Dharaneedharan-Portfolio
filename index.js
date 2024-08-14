const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

const port = process.env.PORT ||3400



app.use(cors())
app.use(express.json())
app.use('/mail',require('./Route/AllRoute'))




app.listen(port,()=>{
    console.log(`server running in port ${port}`)
})
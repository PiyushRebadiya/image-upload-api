const express = require('express')
const mongoos = require('mongoose')
const dotenv = require("dotenv")
const cors = require('cors')
const app = express();
const port = 4500

var route = require('./route')

dotenv.config()

mongoos.connect(
  process.env.DB_ACCESS,
  {useUnifiedTopology: true,useNewUrlParser:true},
  () => console.log("connect to mongoDB!!!")
)

app.use(express.json())
app.use(cors())
app.use('/',route)



// create url for show image
app.use('/profile',express.static('pic'))

app.listen(port,()=>{
  console.log(`App is listing at http://localhost:${port}`);
})
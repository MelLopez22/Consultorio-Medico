const express = require ('express');
require ('dotenv').config();
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static('public'));

app.use(express.json())

app.use('/auth', require('./routes/auth'))

app.listen(process.env.PORT, ()=>{
    console.log(`escuchando el puerto ${process.env.PORT}`);
})



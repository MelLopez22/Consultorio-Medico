const express = require ('express');
require ('dotenv').config()

const app = express();

app.use('/auth', require('./routes/auth'))


app.listen(process.env.PORT, ()=>{
    console.log(`escuchando el puerto ${process.env.PORT}`);
})



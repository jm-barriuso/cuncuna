const express = require('express');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

require('./server/config/mongoose.config')
 
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes')(app); 

 
app.listen(8000, () => {
    console.log("Servidor Conectado")
})
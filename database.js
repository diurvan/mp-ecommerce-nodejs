const mongoose = require('mongoose')
require('dotenv').config();

mongoose
    .connect(process.env.mongodbconnection,{
        useUnifiedTopology: true,
        useNewUrlParser:true,
        useFindAndModify: false
        }
    )
    .then((db) => console.log('Db is connected'))
    .catch((err) => console.log(err));
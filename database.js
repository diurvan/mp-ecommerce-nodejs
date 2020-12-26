const mongoose = require('mongoose')
require('dotenv').config();
/*
mongoose
    .connect(process.env.mongodbconnection,{
        useUnifiedTopology: true,
        useNewUrlParser:true,
        useFindAndModify: false
        }
    )
    .then((db) => console.log('Db is connected'))
    .catch((err) => console.log(err));
*/
mongoose
    .connect("mongodb+srv://diurvan:4ZI8ubWsbnweqRca@diurvanmongodb.cl5na.mongodb.net/db-notifications?retryWrites=true&w=majority",{
        useUnifiedTopology: true,
        useNewUrlParser:true,
        useFindAndModify: false
        }
    )
    .then((db) => console.log('Db is connected'))
    .catch((err) => console.log(err));
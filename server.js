const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport')


const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//app at /
app.get('/' , (req,res) => res.send("h")); 

//estabilishes connection with database
mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log("Connected to Mongodb ") )
    .catch((err) => console.log(err));

//starting here
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));;
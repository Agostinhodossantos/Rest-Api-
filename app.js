const express = require('express');
const app = express();
const mongoose = require("mongoose")
require('dotenv/config')

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)

// Routes
app.get('/' , (req, res) => {
    res.send("We are on home")
})

// connect db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true}, () => 
    console.log("Connected")
)
// 
app.listen(4000);
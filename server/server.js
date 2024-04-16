// server.js
const express = require('express');
const mongoose =require('mongoose')
const cors = require('cors');
require('dotenv').config();


const app = express();


// Middleware
app.use(cors());
app.use(express.json());




mongoose.connect(process.env.MONG_URI,{dbName:"BlogsApp"})
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => console.error(err));

// Routes
//const postsRouter = require('./');
//app.use('/', postsRouter);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is  running on port `, process.env.PORT);
});
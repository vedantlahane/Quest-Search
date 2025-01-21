
const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');//to allow cross-origin requests, that means to allow the frontend to communicate with the backend
require('dotenv').config();//to use the .env file

//set up express
const app = express();

//middleware for parsing json data and cors to allow cross-origin requests 

app.use(cors());//enables all cors requests
app.use(express.json());//parse json data

//basic route to test the server
app.get('/', (req, res) => {
    res.send('QuestSearch server is running');
});

//connect to the database
const url = process.env.ATLAS_URI;
mongoose.connect(url,{
    useNewUrlParser: true, 
    useCreateIndex: true,//to avoid deprecation warnings
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database', err);
});

//start server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
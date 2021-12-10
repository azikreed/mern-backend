const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//connect env and PORT
const env = require('dotenv');
env.config();
const PORT = process.env.PORT;

//routes
const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

app.use(bodyParser());
//database connect
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.mfgtv.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`)
.then(console.log('Database connected...'));




app.use('/api', userRoutes);
app.use('/api', adminRoutes);

//listen
app.listen(PORT, ()=>{
    console.log(`Server has been started on the port ${PORT}`);
})
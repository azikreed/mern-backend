const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
//connect env and PORT
const env = require('dotenv');
env.config();
const PORT = process.env.PORT;

//routes
const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const initialDataRoutes = require('./routes/admin/initialData');
const pageRoutes = require('./routes/admin/page');

//database connect
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.mfgtv.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`)
.then(console.log('Database connected...'));


app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'uploads') ))

app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', initialDataRoutes);
app.use('/api', pageRoutes);

//listen
app.listen(PORT, ()=>{
    console.log(`Server has been started on the port ${PORT}`);
})
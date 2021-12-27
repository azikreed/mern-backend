const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
//connect env and PORT
const env = require('dotenv');
env.config();
const PORT = process.env.PORT;
const cors = require('cors')

//routes
const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const initialDataRoutes = require('./routes/admin/initialData');
const pageRoutes = require('./routes/admin/page');
const addressRoutes = require('./routes/address');
const orderRoutes = require('./routes/order');
const adminOrderRoute = require('./routes/admin/order.routes')

//database connect
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.mfgtv.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`)
.then(console.log('Database connected...'));


app.use(express.json())
app.use(cors())
app.use('/public', express.static(path.join(__dirname, 'uploads') ))

app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', initialDataRoutes);
app.use('/api', pageRoutes);
app.use('/api', addressRoutes);
app.use('/api', orderRoutes);
app.use('/api', adminOrderRoute);

//listen
app.listen(PORT, ()=>{
    console.log(`Server has been started on the port ${PORT}`);
})
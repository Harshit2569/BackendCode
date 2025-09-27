// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const authRoutes = require('./Routes/authRoutes');
// const userRoutes = require('./Routes/userRoutes/userRoutes')
// const sequelize = require('./config/database');
// const productRoutes = require('./Routes/productRoutes');

// const app = express();
// app.use(express.json());

// // Enable CORS dynamically for all origins (safe for testing)
// // In production, replace '*' with your frontend URL
// app.use(cors({
//     origin: process.env.FRONTEND_URL || '*' 
// }));

// // Routes
// app.use('/api', authRoutes);
// app.use('/api/user', userRoutes);


// // Use Railway port or fallback to 3000 locally
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes');
const userRoutes = require('./Routes/userRoutes/userRoutes');
const productRoutes = require('./Routes/Products/productRoutes'); // ✅ Product Routes
const sequelize = require('./Config/database');

const app = express();

// ✅ Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS dynamically for all origins (safe for testing)
app.use(cors({
    origin: process.env.FRONTEND_URL || '*'
}));

// ✅ Routes
app.use('/api', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes); // Product Routes

// ✅ Connect to the database
sequelize.authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection error:', err));

// ✅ Sync Sequelize models with database
sequelize.sync({ alter: true }) // automatically creates or updates tables
    .then(() => console.log('Sequelize models synced with database'))
    .catch(err => console.error('Sequelize sync error:', err));

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

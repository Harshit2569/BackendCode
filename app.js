require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes');

const app = express();
app.use(express.json());

// Enable CORS dynamically for all origins (safe for testing)
// In production, replace '*' with your frontend URL
app.use(cors({
    origin: process.env.FRONTEND_URL || '*' 
}));

// Routes
app.use('/api', authRoutes);

// Use Railway port or fallback to 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

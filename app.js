const express = require('express');
const app = express();
const authRoutes = require('./Routes/authRoutes');

app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api', authRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

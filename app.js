// const express = require('express');
// const app = express();
// const authRoutes = require('./Routes/authRoutes');

// app.use(express.json()); // Parse JSON bodies

// // Routes
// app.use('/api', authRoutes);

// // Start server
// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require('express');
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

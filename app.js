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
const cors = require('cors'); // <-- import cors
const app = express();
const authRoutes = require('./Routes/authRoutes');

// ======= CORS MIDDLEWARE =======
app.use(cors()); // <-- allow all origins (dev-friendly)
// For production, restrict to your frontend domain:
// app.use(cors({ origin: "http://localhost:5173" }));

// ======= PARSE JSON =======
app.use(express.json()); // Parse JSON bodies

// ======= ROUTES =======
app.use('/api', authRoutes);

// ======= START SERVER =======
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

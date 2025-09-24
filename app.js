// const express = require('express');
// const app = express();
// const authRoutes = require('./Routes/authRoutes');

// app.use(express.json()); // Parse JSON bodies

// // Routes
// app.use('/api', authRoutes);

// // Start server
// const PORT = 3000;
// // app.listen(PORT, () =>
// //     //  console.log(`Server running on port ${PORT}
// //         console.log(`192.168.1.2:${PORT})
// //         `));


// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });


require('dotenv').config();

const express = require('express');
const cors = require('cors'); // <-- Import cors
const app = express();
const authRoutes = require('./Routes/authRoutes');

app.use(express.json()); // Parse JSON bodies

// Enable CORS for all origins (development only)
// app.use(cors());
app.use(cors({ origin: 'http://localhost:5173' }));


// Routes
app.use('/api', authRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

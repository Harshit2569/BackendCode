// const jwt = require('jsonwebtoken');
// const User = require('../../Models/User/userModal/userModal');
// const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

// const getProfile = async (req, res) => {
  
//   try {
//     // Extract token from Authorization header
//     const token = req.headers.authorization?.split(' ')[1];
//     console.log('Authorization header:', req.headers.authorization);
//     if (!token) return res.status(401).json({ error: "Unauthorized" });

//     // Verify JWT
//     const decoded = jwt.verify(token, SECRET_KEY);
//     const userId = decoded.id;

//     // Fetch user from DB
//     const user = await User.getById(userId);
//     if (!user) return res.status(404).json({ error: "User not found" });

//     res.json({ user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// module.exports = { getProfile };

const jwt = require('jsonwebtoken');
const User = require('../../Models/User/userModal/userModal'); // adjust path
const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

const getProfile = async (req, res) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // If token starts with "Bearer ", remove it
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trim();
    }

    // Verify JWT
    const decoded = jwt.verify(token, SECRET_KEY);
    const userId = decoded.id;

    // Fetch user from DB
    const user = await User.getById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getProfile };

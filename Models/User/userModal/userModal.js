
const db = require('../../../DB/db');
const User = {
  // Get user by ID
  getById: async (id) => {
    const [rows] = await db.query(
      "SELECT id, name, email, created_at FROM users WHERE id = ?",
      [id]
    );
    return rows[0]; // returns single user object or undefined
  },
};

module.exports = User;

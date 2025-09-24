const { readUsers, writeUsers } = require('../Utils/fileUtils');

const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // Check if all fields are provided
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Read existing users
  const users = readUsers();

  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Generate incremental ID starting from 1
  const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

  const newUser = {
    id: newId,
    name,
    email,
    password
  };

  // Add new user and save to JSON
  users.push(newUser);
  writeUsers(users);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
};

module.exports = { registerUser };

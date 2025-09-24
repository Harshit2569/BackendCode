const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../Data/users.json');

function readUsers() {
  // create file if it doesn't exist
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
  }

  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data); // return the users array
}

function writeUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

module.exports = { readUsers, writeUsers };

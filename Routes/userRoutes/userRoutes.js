const express = require('express');
const router = express.Router();
const { getProfile } = require('../../Controllers/userController/userController');

router.get('/profile', getProfile);

module.exports = router;

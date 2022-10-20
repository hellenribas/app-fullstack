const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();


router.put('/update', userController.update);

module.exports = router;
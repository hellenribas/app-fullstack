const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();


router.put('/update', userController.update);
router.delete('/delete/:id', userController.deleted);

module.exports = router;
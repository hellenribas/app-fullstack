const express = require('express');
const userController = require('../controllers/userController');
const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.use('/', tokenValidate);
router.put('/update', userController.update);
router.delete('/delete', userController.deleted);

module.exports = router;
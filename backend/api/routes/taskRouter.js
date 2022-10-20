const express = require('express');
const taskController = require('../controllers/taskController');
const tokenValidate = require('../middlewares/tokenValidate');

const router = express.Router();

router.use('/', tokenValidate);
router.get('/', taskController.getTasks);
router.post('/add', taskController.addTask);
router.delete('/delete/all', taskController.deletedTask);

module.exports = router;

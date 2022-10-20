const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.post('/', taskController.getTasks);
router.post('/add', taskController.addTask);
router.delete('/delete/all', taskController.deletedTask);

module.exports = router;

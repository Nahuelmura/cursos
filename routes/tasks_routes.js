const express = require('express');
let TasksController = require('../bases_De_datos/controllers/tasks');

let router = express.Router();

router.route('/tasks').get(function(req,res){
   res.send('hola mundo desde una subruta');

}).post(TasksController.create);

router.get('/tasks/new', TasksController.new);


module.exports = router;
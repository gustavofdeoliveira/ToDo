const express = require('express');
const router = express.Router();
const { body } = require("express-validator");

//Importações necessárias
const taskController = require('../controller/taskController')
const userAuth = require('../middleware/unsureAuthenticated')

//ROUTAS com seus respectivos controlers e middlewares
router.post('/create', 
[
    body('title', 'Title é necessário').exists({checkFalsy: true}),
    body('date', 'Date é necessário').exists({checkFalsy: true})
], userAuth.unsureAuthenticated, taskController.createTask)


//Exporta o ROUTER
module.exports = router
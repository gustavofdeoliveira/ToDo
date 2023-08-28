const express = require('express');
const router = express.Router();

//Importações necessárias
const taskController = require('../controller/taskController')
const userAuth = require('../middleware/unsureAuthenticated')


//ROUTAS com seus respectivos controlers e middlewares
router.post('/create', userAuth.unsureAuthenticated, taskController.createTask)
router.put('/update', userAuth.unsureAuthenticated, taskController.updateTask)
router.patch('/importTask', userAuth.unsureAuthenticated, taskController.importantTask)
// router.delete('/Delete', offerController.deleteOffer)
router.get('/getTasks', userAuth.unsureAuthenticated, taskController.getTasks)

router.delete('/deleteAll', userAuth.unsureAuthenticated, taskController.deleteAll)
router.delete('/delete', userAuth.unsureAuthenticated, taskController.deleteTask)


//Exporta o ROUTER
module.exports = router
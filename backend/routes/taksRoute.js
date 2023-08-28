const express = require('express');
const router = express.Router();

//Importações necessárias
const taskController = require('../controller/taskController')
const userAuth = require('../middleware/unsureAuthenticated')


//ROUTAS com seus respectivos controlers e middlewares
router.post('/create', userAuth.unsureAuthenticated, taskController.createTask)
// router.put('/Update', userAuth.unsureAuthenticated, companyAuth.ensureCompany, offerController.updateOffer)
// router.delete('/Delete', offerController.deleteOffer)
router.get('/getTasks', userAuth.unsureAuthenticated, taskController.getTasks)

router.delete('/deleteAll', userAuth.unsureAuthenticated, taskController.deleteAll)



//Exporta o ROUTER
module.exports = router
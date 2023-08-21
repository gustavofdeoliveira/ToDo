const taskService = require('../service/taskService')
require('express-async-errors')
const { validationResult } = require("express-validator");

const createTaks = (req, res) => {
    //Pega as infos da requisição
    const { title, date, description } = req.body

    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json({
            error: errors.errors[0].msg
        })
        return
    }

    //Instancia a classe criando uma vaga
    const taks = new taskService.createTaks();

    //Tratamento das respostas do método da classe
    task.getUser(userID).then((resul) => {
        if(resul.type === "error") {
            res.status(500).json({
                message: resul.message
            })
        } else {
            res.status(200).json({
                user: resul.user
            })
        }
    })
}

const getTaks = (req, res) => {
    //Pega as infos da requisição
    const { userID } = req.body

    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json({
            error: errors.errors[0].msg
        })
        return
    }

    //Instancia a classe criando uma vaga
    const taks = new taskService.getTaks();

    //Tratamento das respostas do método da classe
    task.getUser(userID).then((resul) => {
        if(resul.type === "error") {
            res.status(500).json({
                message: resul.message
            })
        } else {
            res.status(200).json({
                user: resul.user
            })
        }
    })
}



//Exporta as funções do controller para o ROUTER
module.exports = {
    getUser, getStatus
}
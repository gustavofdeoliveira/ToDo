const taskService = require("../service/taskService");

require("express-async-errors");

const createTask = (req, res) => {
  //Pega as infos da requisição
  const { title, dir, date, description } = req.body;

  //Instancia a classe criando uma vaga
  const task = new taskService.Task(title, dir, description, date);

  //Tratamento das respostas do método da classe

  task.createTask().then((resul) => {
    if (resul.type === "error") {
      res.status(500).json({
        error: resul.message,
      });
    } else {
      res.status(200).json({
        message: resul.message,
        task: resul,
      });
    }
  });
};

const getTasks = (req, res) => {
  //Tratamento das respostas do método da classe
  const task = new taskService.Task();

  task.getTasks().then((resul) => {
    if (resul.type === "error") {
      res.status(500).json({
        error: resul.message,
      });
    } else {
      res.status(200).json({
        message: resul.message,
        task: resul,
      });
    }
  });
};

const deleteAll = (req, res) => {
  const task = new taskService.Task();

  task.deleteAll().then((resul) => {
    if (resul.type === "error") {
      res.status(500).json({
        error: resul.message,
      });
    } else {
      res.status(200).json({
        message: resul.message,
      });
    }
  }
  )}

//Exporta as funções do controller para o ROUTER
module.exports = {
  createTask,
  getTasks,
  deleteAll,
};

const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite')

//Classe para o match da vaga com a usuária
class Task {
    constructor (id, date, title, description, status, isImportant, createdAt, updatedAt) {
        this.id = id
        this.date = date
        this.title = title
        this.description = description
        this.status = status
        this.isImportant = isImportant
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
    
    async createTaks() {
        //Instacia o DB
        const db = await sqlite.open({ filename: './database/database.db', driver: sqlite3.Database });

        //Verfica se o ID pertence a algum Usuário
        const tasks = await db.all(`INSERT INTO task \ ORDER BY id ASC`);

        //Verifica se o usuário existe
        if (!tasks) {
            const error = {
                type: 'error',
                message: 'Task not found'
            }
            return error
        }

        //Retorna infos ao client
        const sucess = {
            type: 'sucess',
            tasks: tasks
        }
        db.close()
        return sucess

    }
    async getTaks() {
        //Instacia o DB
        const db = await sqlite.open({ filename: './database/database.db', driver: sqlite3.Database });

        //Verfica se o ID pertence a algum Usuário
        const tasks = await db.all(`SELECT * \ FROM task \ ORDER BY id ASC`);

        //Verifica se o usuário existe
        if (!tasks) {
            const error = {
                type: 'error',
                message: 'Task not found'
            }
            return error
        }

        //Retorna infos ao client
        const sucess = {
            type: 'sucess',
            tasks: tasks
        }
        db.close()
        return sucess

    }

    
}

module.exports = { Task }
const { v4: uuid } = require("uuid");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Task {
  constructor(title, dir, description, date, completed, important) {
    if (!this.id) {
      this.id = uuid();
    }
    this.title = title;
    this.dir = dir;
    this.description = description;
    this.date = date;
    this.completed = completed;
    this.important = important;
  }

  createTask() {
    return prisma.task.create({
      data: {
        id: this.id,
        title: this.title,
        dir: this.dir,
        description: this.description,
        date: this.date,
        completed: this.completed,
        important: this.important,
      },
    });
  }

  getTasks() {
    return prisma.task.findMany();
  }

  updateTask() {
    console.log(this);
    return prisma.task.update({
      data: {
        id: this.id,
        title: this.title,
        dir: this.dir,
        description: this.description,
        date: this.date,
        updatedAt: date.now(),
      },
      where: {
        id: this.id,
      },
    });
  }

  deleteAll() {
    return prisma.task.deleteMany();
  }
  deleteTask() {
    return prisma.task.delete({
      where: {
        id: this.id,
      },
    });
  }
  importantTask() {
    return prisma.task.update({
      where: {
        id: this.id,
      },
      data: {
        important: this.important,
      },
    });
  }
}

module.exports = { Task };

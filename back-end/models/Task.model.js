const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const taskSchema = new Schema(
  {
    title: 'String',
    description: 'String',
    assignedTo: 'String'
  }
);

const Task = model("Task", taskSchema);

module.exports =  Task;

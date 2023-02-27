const router = require("express").Router();
const Task = require('../models/Task.model')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/tasks', async (req, res, next) => {
  // Get all tasks
  const allTasks = await Task.find()
  res.json(allTasks)
})

router.get('/tasks/:taskId', async (req, res, next) => {
  const { taskId } = req.params
  try {
    // Get one task
    const task = await Task.findById(taskId)
    res.json(task)
  } catch (error) {
    console.log(error)
  }
})

router.post('/tasks', async (req, res) => {
  const newTaskData = req.body
  console.log(newTaskData)
  const newTask = await Task.create(newTaskData)
  res.status(201).json(newTask)
})

router.put('/tasks/:taskId', async (req, res) => {
  const { taskId } = req.params
  const updateTaskData = req.body
  console.log(updateTaskData)
  await Task.findByIdAndUpdate(taskId, updateTaskData)
  res.json({ message: 'Task updated properly' })
})

router.delete('/tasks/:taskId', async (req, res, next) => {
  const { taskId } = req.params
  try {
    // Delete one task
    await Task.findByIdAndDelete(taskId)
    res.json({ message: 'Task deleted properly' })
  } catch (error) {
    console.log(error)
  }
})


module.exports = router;

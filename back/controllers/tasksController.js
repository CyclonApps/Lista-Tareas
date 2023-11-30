import { validateTask } from '../schemas/tasks.js'

export class TasksController {
  constructor ({ taskModel }) {
    this.taskModel = taskModel
  }

  getByUserId = async (req, res) => {
    const { userId } = req.params
    const tasks = await this.taskModel.getUserTasks({ userId })
    if (tasks) return res.json(tasks)
    res.status(404).json({ message: 'Tasks not found' })

    res.json(tasks)
  }

  create = async (req, res) => {
    const result = validateTask(req.body)

    if (result.error) return res.status(422).json({ error: result.error.message })

    const newTask = await this.taskModel.create({ input: result.data })

    res.status(201).json(newTask)
  }
}

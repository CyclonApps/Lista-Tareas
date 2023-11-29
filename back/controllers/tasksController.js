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
}

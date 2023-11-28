export class TasksController {
  constructor ({ taskModel }) {
    this.taskModel = taskModel
  }

  getByUserId = async (req, res) => {
    const { userId } = req.params
    const tasks = await this.taskModel.getUserTasks({ userId })

    res.json(tasks)
  }
}

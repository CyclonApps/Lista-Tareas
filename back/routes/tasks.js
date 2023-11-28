import { Router } from 'express'
import { TasksController } from '../controllers/tasksController.js'

export const createTasksRouter = ({ taskModel }) => {
  const tasksRouter = Router()

  const tasksController = new TasksController({ taskModel })

  tasksRouter.get('/:userId', tasksController.getByUserId)

  return tasksRouter
}

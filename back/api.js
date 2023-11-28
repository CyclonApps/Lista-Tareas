import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createTasksRouter } from './routes/tasks.js'
import { TaskModel } from './models/taskModel.js'
import 'dotenv/config.js'

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/tasks', createTasksRouter({ TaskModel }))

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`App listenint on http://localhost:${PORT}`)
})

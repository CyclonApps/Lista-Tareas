import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createTasksRouter } from './routes/tasks.js'

const app = express()

app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/tasks', createTasksRouter())

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`App listenint on http://localhost:${PORT}`)
  console.log(process.env)
})

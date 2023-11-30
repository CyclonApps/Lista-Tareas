import 'dotenv/config'
// TODO: injectar connexió BD
import { getDBConnection } from '../database/mysql.js'

const connection = await getDBConnection()

export class TaskModel {
  static async getUserTasks ({ userId }) {
    if (userId) {
      try {
        const [tasks] = await connection.query(
          'SELECT * FROM tasks WHERE userId = ?;',
          [userId]
        )

        if (tasks.length === 0) return []

        return tasks[0]
      } catch (error) {
        return []
      }
    }
  }

  static async create ({ input }) {
    const {
      userId,
      content,
      status
    } = input

    const uuid = await connection.query('SELECT UUID() uuid;')
    const [{ taskUuid }] = uuid

    try {
      await connection.query(
        `INSERT INTO tasks (taskId, userId, content, isCompleted)
          VALUES (UUID_TO_BIN("${taskUuid}"), ?, ?, ?);`,
        [userId, content, status]
      )
    } catch (e) {
      throw new Error(e)
    }

    const [tasks] = await connection.query(
      `SELECT taskId, content, isCompleted FROM tasks
        WHERE userId=UUID_TO_BIN(?);`,
      [taskUuid]
    )

    return tasks[0]
  }

  static delete ({ taskId }) {
    console.log('hola')
  }
}

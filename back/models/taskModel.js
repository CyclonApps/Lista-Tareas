import 'dotenv/config'
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
}

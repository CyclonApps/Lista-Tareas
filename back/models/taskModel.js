import 'dotenv/config'
import { dbConnection } from '../database/mysql.js'

export class TaskModel {
  static async getUserTasks ({ userId }) {
    if (userId) {
      const [tasks] = dbConnection.query(
        'SELECT * FROM tasks WHERE userId = ?;',
        userId
      )

      if (tasks.length === 0) return []

      return tasks
    }
  }
}

import mysql from 'mysql2/promise'
import 'dotenv/config.js'

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: 'admin',
  database: 'moviesdb'
}

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

export const dbConnection = await mysql.createConnection(process.env.DB_CONFIG)

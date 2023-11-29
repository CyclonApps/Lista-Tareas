import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

// const DEFAULT_CONFIG = {
//   host: 'localhost',
//   user: 'root',
//   port: '3306',
//   password: 'admin',
//   database: 'moviesdb'
// }

const DEFAULT_CONFIG = {
  host: process.env.HOST,
  user: process.env.USER,
  port: process.env.PORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
}

export const getDBConnection = async () => {
  return await mysql.createConnection(DEFAULT_CONFIG)
}

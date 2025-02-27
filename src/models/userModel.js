import pool from '../configs/db.js'

const register = async ({ username, email, password }) => {
  try {
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    )
    return result.rows[0]
  } catch (error) {
    throw new Error('Failed to register user: ' + error.message)
  }
}

const findOneByUsername = async (username) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username])
    return result.rows[0]
  } catch (error) {
    throw new Error('Failed to find user: ' + error.message)
  }
}

export const userModel = {
  register,
  findOneByUsername
}

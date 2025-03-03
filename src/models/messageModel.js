import pool from '../configs/db.js'

const checkUserExists = async (userId) => {
  const result = await pool.query('SELECT id FROM users WHERE id = $1', [userId])
  return result.rowCount > 0 // Trả về true nếu user tồn tại
}

const getAllMessages = async (userId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM messages WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    )
    return result.rows
  } catch (error) {
    throw new Error('Error retrieving all messages: ' + error.message)
  }
}

const getMessageById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM messages WHERE id = $1', [id])
    return result
  } catch (error) {
    throw new Error('Error retrieving message: ' + error.message)
  }
}

const getRandomMessage = async (userId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM messages WHERE user_id = $1 ORDER BY RANDOM() LIMIT 1',
      [userId]
    )
    return result
  } catch (error) {
    throw new Error('Error retrieving random message: ' + error.message)
  }
}

const createMessage = async ({ content, author, userId }) => {
  try {
    const userExists = await checkUserExists(userId)
    if (!userExists) {
      throw new Error(`User with ID ${userId} does not exist`)
    }

    const result = await pool.query(
      'INSERT INTO messages (user_id, author, content) VALUES ($1, $2, $3) RETURNING *',
      [userId, author || null, content]
    )
    return result.rows[0]
  } catch (error) {
    throw new Error('Error creating message: ' + error.message)
  }
}

const updateMessage = async ({ id, content, author }) => {
  try {
    const result = await pool.query(
      'UPDATE messages SET content = $1, author = $2 WHERE id = $3 RETURNING *',
      [content, author, id]
    )
    return result.rows[0]
  } catch (error) {
    throw new Error('Error updating message: ' + error.message)
  }
}

const deleteMessage = async (id) => {
  try {
    const result = await pool.query('DELETE FROM messages WHERE id = $1', [id])
    return result
  } catch (error) {
    throw new Error('Error deleting message: ' + error.message)
  }
}

export const messageModel = {
  getAllMessages,
  getMessageById,
  getRandomMessage,
  createMessage,
  updateMessage,
  deleteMessage
}

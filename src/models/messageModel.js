import pool from '../configs/db.js'

const getAllMessages = async () => {
  try {
    const result = await pool.query('SELECT * FROM messages')
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

const getRandomMessage = async () => {
  try {
    const result = await pool.query('SELECT * FROM messages ORDER BY RANDOM() LIMIT 1')
    return result
  } catch (error) {
    throw new Error('Error retrieving random message: ' + error.message)
  }
}

const createMessage = async ({ content, tag }) => {
  try {
    const result = await pool.query(
      'INSERT INTO messages (content, tag) VALUES ($1, $2) RETURNING *',
      [content, tag || null]
    )
    return result.rows[0]
  } catch (error) {
    throw new Error('Error creating message: ' + error.message)
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
  deleteMessage
}

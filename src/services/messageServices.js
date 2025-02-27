import { messageModel } from '../models/messageModel.js'

const getAllMessages = async () => {
  try {
    const result = await messageModel.getAllMessages()
    return result
  } catch (error) {
    throw new Error('Failed to get all messages: ' + error.message)
  }
}

const getMessageById = async (id) => {
  try {
    const result = await messageModel.getMessageById(id)
    return result.rows[0]
  } catch (error) {
    throw new Error('Failed to get message by ID: ' + error.message)
  }
}

const getRandomMessage = async () => {
  try {
    const result = await messageModel.getRandomMessage()
    return result.rows[0]
  } catch (error) {
    throw new Error('Failed to get random message: ' + error.message)
  }
}

const createMessage = async ({ content, tag }) => {
  try {
    const result = await messageModel.createMessage({ content, tag })
    return result
  } catch (error) {
    throw new Error('Failed to create message: ' + error.message)
  }
}

const deleteMessage = async (id) => {
  try {
    const result = await messageModel.deleteMessage(id)
    return result
  } catch (error) {
    throw new Error('Failed to delete message: ' + error.message)
  }
}

export const messageService = {
  getAllMessages,
  getMessageById,
  getRandomMessage,
  createMessage,
  deleteMessage
}

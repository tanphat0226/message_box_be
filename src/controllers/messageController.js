import { messageService } from '../services/messageServices.js'

const getAllMessages = async (req, res) => {
  try {
    const messages = await messageService.getAllMessages()
    res.json(messages)
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const getMessageById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await messageService.getMessageById(id)
    if (result) res.json(result)
    else res.status(404).json({ error: 'Message not found' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getRandomMessage = async (req, res) => {
  try {
    const randomMessage = await messageService.getRandomMessage()
    res.json(randomMessage)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const createMessage = async (req, res) => {
  try {
    const { text } = req.body
    const newMessage = await messageService.createMessage(text)
    res.status(201).json(newMessage)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params
    await messageService.deleteMessage(id)
    res.json({ message: 'Message deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: error.message })
  }
}

export const messageController = {
  getAllMessages,
  getMessageById,
  getRandomMessage,
  createMessage,
  deleteMessage
}

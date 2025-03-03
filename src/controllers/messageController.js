import { messageService } from '../services/messageServices.js'

const getAllMessages = async (req, res) => {
  try {
    const userId = req.user.id
    const messages = await messageService.getAllMessages(userId)
    res.json(messages)
  } catch (err) {
    res.status(500).json({ error: err.message })
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
    const userId = req.user.id
    const randomMessage = await messageService.getRandomMessage(userId)
    res.json(randomMessage)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const createMessage = async (req, res) => {
  try {
    const { content, author } = req.body
    const userId = req.user.id
    if (!userId) {
      throw new Error('userId is required and must be a valid number')
    }

    if (!content) {
      throw new Error('Content is required')
    }
    console.log(req.user.id)
    const newMessage = await messageService.createMessage({ content, author, userId })
    if (newMessage instanceof Error) {
      return res.status(400).json({ error: newMessage.message })
    }

    res.status(201).json(newMessage)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateMessage = async (req, res) => {
  try {
    const { id, content, author } = req.body
    if (!id) {
      throw new Error('ID is required')
    }
    const updatedMessage = await messageService.updateMessage({ id, content, author })
    if (updatedMessage instanceof Error) {
      return res.status(400).json({ error: updatedMessage.message })
    }

    res.json(updatedMessage)
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
    res.status(500).json({ error: err.message })
  }
}

export const messageController = {
  getAllMessages,
  getMessageById,
  getRandomMessage,
  createMessage,
  updateMessage,
  deleteMessage
}

import { userService } from '../services/userServices.js'

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const newUser = await userService.register(username, email, password)
    if (newUser instanceof Error) {
      return res.status(400).json({ error: newUser.message })
    }

    res.status(201).json(`${newUser.username} registered successfully`)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const result = await userService.login(username, password)

    res.cookie('authToken', result.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
      maxAge: 60 * 60 * 1000
    })

    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const logout = (req, res) => {
  try {
    res.clearCookie('authToken')

    res.status(200).json({ message: 'Logged out' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const userController = {
  register,
  login,
  logout
}

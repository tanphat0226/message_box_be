import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userModel } from '../models/userModel.js'

const register = async (username, email, password) => {
  try {
    const existUser = await userModel.findOneByUsername(username)
    if (existUser) {
      throw new Error('Username already exists')
    }

    const newUser = {
      username,
      email,
      password: bcrypt.hashSync(password, 10)
    }

    const createdUser = await userModel.register(newUser)
    return createdUser
  } catch (error) {
    throw new Error('Registration failed: ' + error.message)
  }
}

const login = async (username, password) => {
  try {
    const user = await userModel.findOneByUsername(username)
    if (!user) {
      throw new Error('User not found')
    }

    const isPasswordMatch = bcrypt.compareSync(password, user.password)
    if (!isPasswordMatch) {
      throw new Error('Invalid password')
    }

    // Create JWT Token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h'
    })
    console.log('Login token:::', token)

    return { username: user.username, token }
  } catch (error) {
    throw new Error('Login failed: ' + error.message)
  }
}

export const userService = {
  register,
  login
}

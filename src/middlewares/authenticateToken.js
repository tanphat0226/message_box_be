import jwt from 'jsonwebtoken'
import { getCookieValue } from '../utils/getCookieValue.js'

export const authenticateToken = (req, res, next) => {
  const token = getCookieValue(req.headers.cookie, 'authToken')
  console.log(token)
  if (!token) return res.status(401).json({ message: 'Access Denied' })

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid Token' })
    req.user = user
    next()
  })
}

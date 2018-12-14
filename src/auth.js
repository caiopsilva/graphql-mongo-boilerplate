import jwt from 'jsonwebtoken'
import { User } from './model'

export async function getUser (token) {
  if (!token) return { user: null }

  try {
    const decodedToken = jwt.verify(token.substring(4), process.env.JWT_KEY)

    const user = await User.findOne({ _id: decodedToken.id })

    return {
      user
    }
  } catch (err) {
    return { user: null }
  }
}

export function generateToken (user) {
  return `JWT ${jwt.sign({ id: user._id }, process.env.JWT_KEY)}`
}

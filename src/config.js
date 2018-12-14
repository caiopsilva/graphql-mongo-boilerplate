import path from 'path'
import dotenvSafe from 'dotenv-safe'

const root = path.join.bind(this, __dirname, '../')

dotenvSafe.load({
  path: root('.env'),
  sample: root('.env.example')
})

const dBdevelopment = process.env.MONGO_URL || 'mongodb://localhost/database'
const dBproduction = process.env.MONGO_URL || 'mongodb://localhost/database'

export const databaseConfig = (process.env.NODE_ENV === 'production') ? dBproduction : dBdevelopment

export const graphqlPort = process.env.GRAPHQL_PORT || 5000
export const jwtSecret = process.env.JWT_KEY || 'secret_key'

import server from './server'
import connectDatabase from './database'
import { graphqlPort } from './config'

(async () => {
  try {
    const info = await connectDatabase()
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
  } catch (error) {
    console.error('Unable to connect to database')
    process.exit(1)
  }

  await server.listen(graphqlPort)
  console.log(`Server started on port ${graphqlPort}`)
})()

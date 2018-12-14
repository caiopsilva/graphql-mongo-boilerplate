// import { globalIdField, connectionArgs, fromGlobalId } from 'graphql-relay'
// import { NodeInterface } from '../interface/NodeInterface'
// import { NodeField } from '../interface/NodeInterface'
// import UserConnection from '../connection/UserConnection'

import { GraphQLObjectType, GraphQLNonNull, GraphQLID } from 'graphql'
import UserType from './UserType'
import { UserLoader } from '../loader'

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  // node: NodeField,
  fields: () => ({
    me: {
      type: UserType,
      resolve: (root, args, context) => (context.user ? UserLoader.load(context, context.user._id) : null)
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (obj, args, context) => UserLoader.load(context, args.id)
    },
    users: {
      type: [UserType],
      resolve: (obj, args, context) => UserLoader.loadUsers(context)
    }
  })
})

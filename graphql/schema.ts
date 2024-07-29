import { gql } from 'apollo-server-micro';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { NextApiRequest, NextApiResponse } from 'next';

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    family: String
    age: Int
  }

  type AAA {
    name: String
  }

  type Token {
    token: String
    message: String
  }

  type Query {
    arash: AAA
    users: [User]
    user(id: Int!): User
  }

  type Mutation {
    createUser(name: String!, family: String, age: Int): User,
    loginUser(email: String!, password: String!): Token
  }
`;

const resolvers = {
  Query: {
    arash: async () => {
      return {
        name: 'arash123'
      }
    },
    users: async () => {
      return [
        {
          _id: '1',
          name: 'name1',
          family: 'family1',
          age: 1
        }, {
          _id: '2',
          name: 'name2',
          family: 'family2',
          age: 2
        }, {
          _id: '3',
          name: 'name3',
          family: 'family3',
          age: 3
        }
      ]
    },
    user: async (obj: any, args: any, context: any) => {
      console.log('obj:', obj)
      console.log('args:', args)
      console.log('token:', context.token)
      console.log('theme:', context.theme)
      console.log('-------------------')
      return {
        _id: args.id,
        name: 'name1',
        family: 'family1',
        age: 1
      }
    },
  },
  Mutation: {
    createUser: async (obj: any, args: any, context: any) => {
      return {
        _id: 1,
        name: args.name,
        family: args.family,
        age: args.age
      }
    },
    loginUser: async (obj: any, args: any, context: any) => {
      if (args.email === 'admin' && args.password === 'admin') {
        return {
          token: "asdaljfdnoqwefn",
          message: "login success"
        }
      } else {
        return {
          token: "",
          message: "login error"
        }
      }
    }
  }
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json({
    message: "Please visit this link for GraphQL",
    link: 'http://localhost:3000/api/graphql'
  });
}
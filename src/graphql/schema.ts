import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    hello: String
  }

  type Mutation {
    setMessage(message: String): String
  }
`);
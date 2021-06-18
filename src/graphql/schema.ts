import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    hello: String
    getCurrency: [Currency]
  }

  type Mutation {
    setMessage(message: String): String
    setCurrency(currency: CurrencyInput): Currency
  }

  input CurrencyInput {
    curreny_code: String
    exchange_rate: Float
    archived: Boolean
  }

  type Currency {
    curreny_code: String
    exchange_rate: Float
    archived: Boolean
  }
`);
import { graphql, buildSchema } from 'graphql';
import { dbConnection } from './database/mongoose';


const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
dbConnection();
const root = { hello: () => 'Hello world!' };

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
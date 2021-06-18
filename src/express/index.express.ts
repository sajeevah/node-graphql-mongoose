import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from '../graphql/schema';
import { root } from '../graphql/resolver';
 
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
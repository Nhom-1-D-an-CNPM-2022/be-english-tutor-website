import { graphqlHTTP } from 'express-graphql';
import schema from '../graphql/schema';

const startGraphQL = (app) => {
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
};

export default startGraphQL;

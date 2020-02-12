
import getApp from './express';
import graphQLServer from './graphql';

const port = 8089;
const main = async (): Promise<void> => {

  const { app, server } = getApp();
  graphQLServer({ app, server });

  server.listen({ port }, (): void => {
    console.log(`GraphQL server listening for HTTP and WS on ${port}`);
  });
};

main();

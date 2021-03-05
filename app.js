const { ApolloServer, gql } = require("apollo-server");
const Query = require("./resolvers/Queries");
const typeDefs = require("./schema/typeDefs");

const resolvers = {
  Query,
};

const url = 4004;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

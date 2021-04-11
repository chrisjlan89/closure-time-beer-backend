const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config();
const Query = require("./resolvers/Queries");
const Mutation = require("./resolvers/Mutations");
const typeDefs = require("./schema/typeDefs");
const db = require("./models");

const resolvers = {
  Query,
  Mutation,
};

const url = 4004;

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (ctx) => ({ ...ctx, db }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

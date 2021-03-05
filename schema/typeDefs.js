const { gql } = require("apollo-server");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Brewery {
    name: String
    brewery_type: String
    street: String
    address_2: String
    address_3: String
    city: String
    state: String
    county_province: String
    postal_code: String
    country: String
    longitude: Int
    latitude: Int
    phone: Int
    website_url: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    allBreweries: [Brewery]
  }
`;

module.exports = typeDefs;

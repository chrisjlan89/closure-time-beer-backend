const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

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
    lng: Float
    lat: Float
    phone: Int
    website_url: String
    formatted_address: String
    place_id: String
    user_ratings_total: Int
    business_status: String
    price_level: Int
    rating: Float

    opening_hours: OpeningHours
    photos: BreweryPhotos
  }

  type OpeningHours {
    open_now: String
    periods: [HoursObj]
    weekday_text: [String]
  }

  type HoursObj {
    close: Close
    open: Open
  }

  type Open {
    day: Int
    time: String
  }

  type Close {
    day: Int
    time: String
  }

  type BreweryPhotos {
    html_attributions: [String]
    photo_reference: String
    height: Int
    width: Int
  }

  type Query {
    allBreweries: [Brewery]
    allBreweriesFilterApplied(postal_code: String, state: String): [Brewery]
  }

  type Mutation {
    addBrewery: [Brewery]
  }
`;

module.exports = typeDefs;

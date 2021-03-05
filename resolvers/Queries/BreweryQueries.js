const breweryJSON = require("../../lib/Sampledata");

const BreweryQueries = {
  async allBreweries(_, __, { db }) {
    try {
      return breweryJSON;
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = BreweryQueries;

const breweryJSON = require("../../lib/Sampledata");
const axios = require("axios");
const allBreweries = require("../../lib/all_breweries");

const BreweryMutations = {
  async addBrewery(_, __, { db }) {},
};

module.exports = BreweryMutations;

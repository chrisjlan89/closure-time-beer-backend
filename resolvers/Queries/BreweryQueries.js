const BreweryQueries = {
  async allBreweries(_, args, { db }) {
    console.log(_, args, db);
    try {
      const res = await db.Brewery.find({})
        .populate("opening_hours")
        .populate("photos");
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  async allBreweriesFilterApplied(ctx, args, { db }) {
    console.log(ctx, args, db);
    const { state } = args;
    try {
      const res = await db.Brewery.find({ state })
        .populate("opening_hours")
        .populate("photos");
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = BreweryQueries;

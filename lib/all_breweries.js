const axios = require("axios");
const parallel = (tasks, fn) => Promise.all(tasks.map((task) => fn(task)));
const states = require("./states.js");

const allBreweries = async () => {
  const breweryCalls = async (state) => {
    try {
      let page = 0;
      let data = [];
      let response;

      do {
        const requestUrl = `https://api.openbrewerydb.org/breweries?by_state=${state.toLowerCase()}&per_page=50&page=${page}`;
        response = await axios.get(requestUrl);
        page = page + 1;
        if (response.data.length) {
          let copy = [...response.data];

          const mutatedcopy = copy.map((c) => {
            const newcopy = { ...c };
            delete newcopy.id;
            delete newcopy.updated_at;
            delete newcopy.created_at;

            newcopy.lng = isNaN(parseFloat(newcopy.longitude))
              ? 0
              : +newcopy.longitude;

            newcopy.lat = isNaN(parseFloat(newcopy.latitude))
              ? 0
              : +newcopy.latitude;
            delete newcopy.longitude;
            delete newcopy.latitude;

            return newcopy;
          });

          data = [...data, ...mutatedcopy];
        }
      } while (response.data.length);

      // const dataWithExtra = await parallel(data, extraData);
      // return dataWithExtra;

      return data;

      //  console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const allCalls = await parallel(states, breweryCalls);
  const data = allCalls.flat();

  return data;
};

module.exports = allBreweries;

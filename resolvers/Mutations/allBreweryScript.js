// return;
// const { Brewery, BreweryHours, BreweryPhotos } = db;

// const breweries = await allBreweries();

// const creatOne = async (brewery) => {
//   try {
//     const bc = await Brewery.create(brewery);
//     return bc;
//   } catch (e) {
//     console.log("error cretying brewery");
//   }
// };

// const addDetails = async (brewery) => {
//   const { name, _id } = brewery;
//   console.log(name, _id);
//   try {
//     const details = await axios.post(
//       `https://api.chrislantier.com/.netlify/functions/placedetails`,
//       {
//         input: name,
//         inputType: "textquery",
//       }
//     );

//     const {
//       formatted_address,
//       user_ratings_total,
//       rating,
//       business_status,
//       opening_hours,
//       photos,
//     } = details.data;

//     console.log(photos);
//     //  return;
//     const updates = {
//       formatted_address,
//       user_ratings_total,
//       business_status,
//       rating,
//     };
//     //   return {
//     //     _id,
//     //     updates,
//     //     opening_hours,
//     //     photos,
//     //   };

//     const hoursres = await BreweryHours.create(opening_hours);
//     const photores = await BreweryPhotos.create({ photos });

//     const allUpdates = {
//       opening_hours: hoursres._id,
//       photos: photores._id,
//       ...updates,
//     };

//     const update = await Brewery.findByIdAndUpdate(_id, allUpdates);
//   } catch (e) {
//     console.log("error");
//   }
// };

// const parallel = (tasks, fn) => Promise.all(tasks.map((task) => fn(task)));
// // console.log(breweries);
// const rsp = await parallel(breweries, creatOne);
// await parallel(rsp, addDetails);
// return;

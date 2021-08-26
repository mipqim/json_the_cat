const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }



  // if (error) {
  //   console.log('error fetch details:', error);
   
  // } else {
  //   const responseObj = JSON.parse(desc);

  //   if (responseObj.length) {
  //     console.log(responseObj[0].description);
  //   } else {
  //     console.log(`${args[2]} breed is not found.`);
  //   }
  // }

});
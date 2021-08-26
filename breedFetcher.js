const args = process.argv;

const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {

  const requestUrl = url + breedName;
  let description = "";

  request(requestUrl, (error, response, body) => {
    if (!error) {
      const responseObj = JSON.parse(body);
  
      if (responseObj.length) {
        description = responseObj[0].description;
      } else {
        description = `${args[2]} breed is not found.`;
      }
    }

    callback(error, description);
  });

};

module.exports = { fetchBreedDescription };

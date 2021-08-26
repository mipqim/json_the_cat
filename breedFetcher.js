const args = process.argv;

const request = require('request');

const requestUrl = "https://api.thecatapi.com/v1/breeds/search?q=" + args[2];

request(requestUrl, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
  } else {
    const responseObj = JSON.parse(body);

    if (responseObj.length) {
      console.log(responseObj[0].description);
    } else {
      console.log(`${args[2]} breed is not found.`);
    }
  }
});
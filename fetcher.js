const request = require('request');
const fs = require('fs');

const urlAndPath = process.argv.slice(2);

request(urlAndPath[0], (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  if(response.statusCode !== 200) {
    throw new Error('URL resulted in an error')
  }
  //take body and write to index.html
  const written = fs.writeFile(urlAndPath[1], body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${Buffer.byteLength(body, 'utf8')} bytes to ${urlAndPath[1]}`)
  })

});
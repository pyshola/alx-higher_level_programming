#!/usr/bin/node

function doRequest(url){
  return new Promise(function (resolve, reject){
   request(url, function(error, response, body){
    if(error == null){
      resolve(body)
    }
    else{
     reject(error)
    }
  });
 });
}

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

request(url, async function (err, response, body) {
  if (err == null) {
    const resp = JSON.parse(body);
    const characters = resp.characters; 
    for (let j = 0; j < characters.length; j++) {
     try{
       let res =  await doRequest(characters[j]);
       console.log(JSON.parse(res).name);
     }
     catch(error){
       console.log(error);
     }
    };
  }
});

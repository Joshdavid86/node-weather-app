let request = require('request');
let argv = require('yargs').argv;

let apiKey = '44892630ea3cc2f7f00ddb6ae9fdeb93';
let city = argv.c || 'houston';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    // Capture the json data to handle
    let weather = JSON.parse(body)
    // Get the temp data and add it to the info output message
    let info = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(info);
  }
});
const request = require("request");
const key = require("./api");
const coordinate = "15.0792301,100.67687";

const url = `https://api.darksky.net/forecast/${key}/${coordinate}`;

// request ดูใน document
request({ url: url, json: true }, (error, response) => {
  console.log(response);
});

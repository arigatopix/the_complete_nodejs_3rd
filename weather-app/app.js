const request = require('request');
const key = require('./api');
const coordinate = '15.0792301,100.67687';

const url = `https://api.darksky.net/forecast/${key}/${coordinate}?units=si`;

request({ url: url, json: true }, (error, response) => {
  // request ดูใน document

  // Parse API เป็น object
  // const data = JSON.parse(response.body);
  // ใช้ request package ช่วยแปลง json to object
  // console.log(response.body.currently);

  // Challenge แสดงผล Temperature และ % ปริมาณฝนน่าจะตก
  // destructuring
  const { temperature, precipProbability } = response.body.currently;

  // แสดง Temp และ % ฝนตก
  console.log(
    `It is currently ${temperature} degrees out . There is a ${precipProbability}% change of rain.`
  );
});

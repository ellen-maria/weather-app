function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
}

let now = new Date();

let p1 = document.querySelector("p1");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

p1.innerHTML = `${day} ${date} ${month}, ${hours}:${minutes}`;

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

function showTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let apiKey = "c5fda3433bf3c36bb1ab695d00f225b4";
let city = "Dublin";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
function searchCity(cityName) {
  let apiKey = "c5fda3433bf3c36bb1ab695d00f225b4";
  let city = cityName;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

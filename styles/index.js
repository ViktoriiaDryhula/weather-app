function showTemperature(responce) {
  let city = responce.data.name;
  let temperature = document.querySelector("#today-temp");
  let temp = Math.round(responce.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = city;
  temperature.innerHTML = temp;
}

function getLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let unit = "metric";
  apiKey = "2718952144ed077c12e7c160fb6fc351";
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showTemperature);
}

function showPosition() {
  navigator.geolocation.getCurrentPosition(getLocation);
}
let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", showPosition);

let now = new Date();
let today = document.querySelector("#today-date");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

today.innerHTML = `${day}, ${date} ${month}, ${hours}:${minutes}`;

function showCityTemperature(responce) {
  let temperature = document.querySelector("#today-temp");
  let temp = Math.round(responce.data.main.temp);
  temperature.innerHTML = temp;
}

function searchCity(event) {
  event.preventDefault();
  var searchInput = document.querySelector("#city-input");
  var h1 = document.querySelector("h1");
  let city = searchInput.value;
  city = city.trim();
  city = city[0].toUpperCase() + city.substring(1);
  h1.innerHTML = city;

  let unit = "metric";
  apiKey = "2718952144ed077c12e7c160fb6fc351";
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCityTemperature);
}

var form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

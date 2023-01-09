function dateTime() {
  const date = new Date();
  let today = date.toDateString();
  let time = date.toLocaleTimeString();
  document.getElementById("date-time").innerHTML =
    '<p id="date">' + today + '</p><p id="time">' + time + "</p>";
  setTimeout(dateTime, 1000);
}

function weatherBalloon(cityID) {
  var apiKey = "b0b6acc2f3d136f6723cd2b21f0bce27"; //OpenWeather API key
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=" +
      cityID +
      "&appid=" +
      apiKey
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let weatherIcon = data.weather[0].icon;
      let tempK = parseFloat(data.main.temp);
      let tempC = Math.round(tempK - 273.15);
      let tempF = Math.round((tempK - 273.15) * 1.8) + 32;
      document.getElementById("weather").innerHTML =
        '<p id="location">' +
        data.name +
        '</p><p id="details" ' +
        'title="' +
        tempF +
        '&deg;F">' +
        '<img src="https://openweathermap.org/img/wn/' +
        weatherIcon +
        '.png">' +
        data.weather[0].description +
        '<span class="separator">|</span>' +
        tempC +
        "&deg;C</p>";
    });
}

function loadWeather() {
  dateTime();
  weatherBalloon(184745); //OpenWeather city ID
}

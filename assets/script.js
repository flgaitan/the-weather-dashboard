//make a variable that will be used in moment.format() to display time
//make API key variable
var timeDisplayEl = $('#timeclock-display');
var weatherApiKey = "7255f5232023240c0207da364db70563";
let startbtn = document.getElementById('submit-Btn');
//moment().format('MMM DD, YYYY [at] hh:mm:ss a');
function timeDisplayElement() {
  var timeCurrent = moment().format('MMM Do YY, h:mm:ss a');
  console.log(timeDisplayEl)
  timeDisplayEl.text(timeCurrent);
  //getApi();
}
timeDisplayElement();

//fetching API
function getApi(e) {
  e.preventDefault()
  let cityName = document.getElementById('city-input').value
  console.log(cityName)
  //var requestApi = 'http://api.openweathermap.org/geo/1.0/direct?q=Chicago,Illinois,United States&limit=5&appid=7255f5232023240c0207da364db70563';
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7255f5232023240c0207da364db70563&units=imperial`

  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //fsetting variables to give values with temp, wind, and humidity information from the API data
      //that need to be displayed on the page
      let tempData = data.main.temp
      let windSpeed = data.wind.speed
      let humidityConditions = data.main.humidity
      //displaying current day data
      document.getElementById('temp').innerHTML = `Temperature: ${tempData} \u00B0F` 
      document.getElementById('windy').innerHTML = `Wind:  ${windSpeed} MPH`
      document.getElementById('humid').innerHTML = `Humidity:  ${humidityConditions} %`
      forecastData(cityName)

    })
}

//4day forecast function, 4-day forecast API link
function forecastData(city) {
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7255f5232023240c0207da364db70563&units=imperial`
  fetch(forecastUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      let list = data.list;

      var actualTime = list.dt;
      var actualDateFormat = new Date(actualTime * 1000);
      console.log(actualTime, actualDateFormat)
      //for (let i=0; i<list.length; i+=8){
      let xtime = 0;
      for (let i = 7; i < list.length; i += 8) {
        //console.log(xtime);
        let useDate = new Date(list[i].dt * 1000);
        console.log(useDate);
        document.querySelector(`.fpannel${xtime}Summary`).innerHTML = `<h3>${useDate}</h3>`;
        document.querySelector(`.fpannel${xtime}Temp`).textContent = "Temperature: " + list[i].main.temp + "\u00B0F";
        document.querySelector(`.fpannel${xtime}Wind`).textContent = "Wind: " + list[i].wind.speed + "MPH";
        document.querySelector(`.fpannel${xtime}Humidity`).textContent = "Humidity Conditions: " + list[i].main.humidity + "%";
        xtime ++;
      };


    })

  //forecastData();


}
startbtn.addEventListener('click', getApi)






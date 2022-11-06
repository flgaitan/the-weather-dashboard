//make a variable that will be used in moment.format() to display time
var timeDisplayEl = $('#timeclock-display');
var weatherApiKey = "7255f5232023240c0207da364db70563";
let startbtn = document.getElementById('submit-Btn');
//moment().format('MMM DD, YYYY [at] hh:mm:ss a');
function timeDisplayElement(){
  var timeCurrent = moment().format('MMM Do YY, h:mm:ss a'); 
  console.log(timeDisplayEl)
   timeDisplayEl.text(timeCurrent);
   //getApi();
  //$('.submit-Btn').on('click',function(){
    //store in localstorage, declaring values by container/section/elements+ class id values(hour)
    //var value = $(this).siblings('.description').val();
    //var time = $(this).parent().attr('id');
    //localStorage.setItem(time, value);
    //console.log(time);
    //console.log(value);
//})
}
timeDisplayElement(); 


function getApi(e) {
  e.preventDefault()
  let cityName = document.getElementById('city-input').value
  console.log(cityName)
    // fetch request gets a list of all the repos for the node.js organization
    //var requestApi = 'http://api.openweathermap.org/geo/1.0/direct?q=Chicago,Illinois,United States&limit=5&appid=7255f5232023240c0207da364db70563';
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7255f5232023240c0207da364db70563&units=imperial`

    fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
         console.log(data)
         let tempData = data.main.temp
         let windSpeed = data.wind.speed 
         let humidityConditions = data.main.humidity 

         document.getElementById('temp').innerHTML=`Temperature: ${tempData}` 
         document.getElementById('windy').innerHTML=`Wind:  ${windSpeed}` 
         document.getElementById('humid').innerHTML=`Humidity:  ${humidityConditions}` 
         forecastData(cityName)

      })
    }

    function forecastData(city){
      let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7255f5232023240c0207da364db70563&units=imperial`
      fetch(forecastUrl)
        .then(function(response){
           return response.json()
          }) 
          .then (function (data){
            console.log(data)
            list = data.list 
            for (let i=0; i<list.length; i+=8){

            }
          })

    }
    startbtn.addEventListener('click', getApi)





  /*const options = {
    method: 'GET', 
      'weatherApiKey': '7255f5232023240c0207da364db70563'
  } 
  
  fetch('http://api.openweathermap.org/geo/1.0/direct?q=chicago,il,usa&limit=5&appid=7255f5232023240c0207da364db70563', options)

    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))*/
  
//make a variable that will be used in moment.format() to display time
var timeDisplayEl = $('#timeclock-display');
var weatherApiKey = "7255f5232023240c0207da364db70563";

//moment().format('MMM DD, YYYY [at] hh:mm:ss a');
function timeDisplayElement(){
  var timeCurrent = moment().format('MMM Do YY, h:mm:ss a'); 
  console.log(timeDisplayEl)
   timeDisplayEl.text(timeCurrent);
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


function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestApi = 'http://api.openweathermap.org/geo/1.0/direct?q=Chicago,Illinois,United States&limit=5&appid=7255f5232023240c0207da364db70563';
  
    fetch(requestApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
         console.log(data)
      })
    }

  getApi();
//initialize storage
const storage = new Storage();
//get stored location data
const weatherLocation = storage.getLocationData();

//initialize weather object
const weather = new Weather(weatherLocation.city,weatherLocation.state);

//initialize UI
const ui = new UI;

//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  //change loaction
  weather.changeLocation(city, state);

  //set local in localstorage
  storage.setLocationData(city, state);

  //get and display weather
  getWeather();

  //close modal
  $('#locModal').modal('hide');
});


function getWeather(){
  weather.getWeather()
  .then(results => {
    console.log(results)
    ui.paint(results);
  })
  .catch(err => console.log(err));
}


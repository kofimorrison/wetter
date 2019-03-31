class UI{
  constructor(){
    this.location = document.getElementById('w-location');this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = weather.name + ', ' + weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp + ' °C';
    this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Feuchtigkeit: ${weather.main.humidity}` + ' %';
    this.feelslike.textContent = `Gefühlt wie: ${weather.main.temp}`;
    this.pressure.textContent = `Atmosphärischer Druck: ${weather.main.pressure}` + ' Pa';
    this.wind.textContent = `Wind: ${weather.wind.speed} `  + ' KMH' + ` ${weather.wind.deg}` + '°';
  }
}
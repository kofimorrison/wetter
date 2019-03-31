class Weather{
  constructor(city, state){
    this.apiKey = 'bedd670938ecec73ba059ed04ddf56a1';
    this.city = city;
    this.state = state;
  }

  //fetch weather from api
async getWeather(){
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&APPID=${this.apiKey}&lang=de`);

  const responseData = await response.json();
  return responseData;
  }

  //change weather loaction
  changeLocation(city,state){
    this.city = city;
    this.state = state;
  }
}

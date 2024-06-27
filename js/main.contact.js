// sync async

async function getWeatherForecast() {
   let data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=fe929c8b878144e880e225611231508&q=egypt&days=3`)
   let finalData = await data.json()
   console.log(finalData.forecast.forecastday[0].day.maxtemp_c);
   document.getElementById("maxTemp").innerHTML = finalData.forecast.forecastday[0].day.maxtemp_c
}

getWeatherForecast()

// http://api.weatherapi.com/v1/forecast.json?key=fe929c8b878144e880e225611231508&q=egypt&days=3




let apiKey = `0c86627f36234d8e997220137242506`
let baseUrl =`http://api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=3`


async function getWeatherDay() {
   try {
      let data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0c86627f36234d8e997220137242506&q=alexandria&days=3`);
      let finalData = await data.json();

      console.log(finalData);
      dispalyWeather(finalData);
   } catch (error) {
      
   }
}

getWeatherDay();

function dispalyWeather(data){
   let dataArray = data.forecast.forecastday
   console.log(dataArray);
   let weatherContent =``
   for (let i = 0; i < dataArray.length; i++) {
      let date = new Date(dataArray[i].date)
      let weekDay = date.toLocaleDateString("en-us" , {weekday: "long"})
      weatherContent+= `
      <div class="card me-1 spec" id="today">
                            <h5 class="float-start pt-3 px-3 fs-6" id="currentDay">${weekDay}</h5>
                            <div class="card-body  text-dark" id="current">
                                <h5 class="card-title cuntry text-dark">Alexandria</h5>
                                <span class="card-text degree fs-2 float-start me-1" id="current-temp" >${dataArray[i].day.maxtemp_c}</span>
                                    <span class=" fs-5 ">o</span>
                                    <span class=" fs-5">c</span>
                                <div class="forecast-icon pt-3">
                                    <img src="https:${dataArray[i].day.condition.icon}" alt="icon">
                                    <p class="text-primary mt-2">${dataArray[i].day.condition.text}</p>
                                    <div class="custom pb-3 text-primary mb-3" id="text"></div>
                                    <span><i class="fa-solid fa-umbrella fa-sm" style="color: #4c4d4f;"></i>20%</span>
                                    <span><i class="fa-solid fa-wind fa-sm ms-3" style="color: #4c4d4f;"></i>18km/h</span>
                                    <span><i class="fa-regular fa-compass fa-sm ms-3" style="color: #4c4d4f;"></i>East</span>
                                </div>
                            </div>
                            
                        </div>
      `
      
   }
   document.querySelector(".card-group").innerHTML = weatherContent;
}
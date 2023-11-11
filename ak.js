const inputBox = document.querySelector(`.input-box`);
const SearchBtn = document.getElementById("searchbtn");
const weather_img = document.querySelector(".weatherbody-img");
const Tempurature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const Humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

async function checkweather(city) {
  const api_key = "8609b59aae8f2ab6ea206344469203f4";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data = await fetch(`${url}`).then(response => response.json());

  Tempurature.innerHTML = `${Math.round(weather_data.main.temp - 273.5)}°C`;
  Humidity.innerHTML = `${weather_data.main.humidity}%`;

  description.innerHTML = `${weather_data.weather[0].description}`;

  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "/APP/icons/rain.png";
      break;

    case "Clear":
      weather_img.src = "/APP/icons/cloud.png";
    case "Mist":
      weather_img.src = "/APP/icons/haze.png";
      break;
    case "Rain":
      weather_img.src = "/APP/icons/rain.png";
      break;
    case " Snow":
      weather_img.src = "/APP/icons/snow.png";
      break;
    case "":
      weather_img.src = "/APP/icons/clear.png";
      break;
  }
  console.log(weather_data);
}

SearchBtn.addEventListener("click", () => {
  checkweather(inputBox.value);
});

checkweather();

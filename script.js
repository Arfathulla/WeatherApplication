const apikey ="9f01937bde1f6254f83f145f74593e6c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathercnd = document.querySelector(".weather-icons")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "None";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Kmph";


        if(data.weather[0].main == "Clouds"){
            weathercnd.src = "cloudy.webp";
        }else  if(data.weather[0].main == "Clear"){
            weathercnd.src = "clear.webp";
        }else  if(data.weather[0].main == "Drizzle"){
            weathercnd.src = "drizzle.webp";
        }else  if(data.weather[0].main == "Rain"){
            weathercnd.src = "rainy.webp";
        }else  if(data.weather[0].main == "Snow"){
            weathercnd.src = "snow.webp";
        }else  if(data.weather[0].main == "Mist"){
            weathercnd.src = "mist.webp";
        }else  if(data.weather[0].main == "Humidity"){
            weathercnd.src = "humidity.webp";
        }else  if(data.weather[0].main == "Thunderstorm"){
            weathercnd.src = "thunderstrom.webp";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display = "none";

        }
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})



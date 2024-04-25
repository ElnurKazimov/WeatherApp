
const apiKey = "933e80e0d5a6daafe76faaee76894033";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const emojiGif = document.querySelector(".emoji");

async function checkWeather(city){
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`); 
   var data = await response.json();
     
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"  ;
   
   console.log(data)


   if(data.weather[0].main == "Clouds"){
       weatherIcon.src = "image/cloudy4.png";
       emojiGif.src = "image/512.gif"
   }

  else if(data.weather[0].main == "Clear"){
       weatherIcon.src = "image/clear.jpg";
       emojiGif.src = "image/happy.gif";
   }

 else if(data.weather[0].main == "Rain"){
       weatherIcon.src = "image/rain.gif";
       emojiGif.src = "image/worried.gif";
   }

else if(data.weather[0].main == "Drizzle"){
       weatherIcon.src = "image/drizzle.png";
       emojiGif.src = "image/worried.gif";
   }

   else if(data.weather[0].main == "Snow"){
       weatherIcon.src = "image/snowflake2.gif " ;
       emojiGif.src = "image/cold2.gif";
   }

   document.querySelector(".weather").style.display = "block";
}  

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

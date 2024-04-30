
const apiKey = "933e80e0d5a6daafe76faaee76894033";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const emojiGif = document.querySelector(".emoji");
const card = document.querySelector(".card")

async function checkWeather(city){
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`); 
   var data = await response.json();

   console.log(data)
     
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
   document.querySelector(".humidity").innerHTML = "<p>Rütubət:</p>"  + data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = "<p>Külək sürəti:</p>" + data.wind.speed + " km/h"  ;
   document.querySelector(".max").innerHTML = "<p>Maximum: </p>" + Math.round(data.main.temp_max) + "°C"
   document.querySelector(".min").innerHTML = "<p>Minimum: </p>" + Math.round(data.main.temp_min) + "°C"

  if(data.dt > data.sys.sunset){
    card.style.background = "url(image/night2.gif)"
   
  }
  else{
    card.style.background = "linear-gradient(135deg, #00feba, #5b548a)";
  }

   if(data.weather[0].main == "Clouds"){
    document.querySelector(".sun").src = "image/cloud.png"
   }

   

  else if(data.weather[0].main == "Clear" && data.dt > data.sys.sunset ){
       document.querySelector(".sun").src = "image/moonNight.webp"
   }

   else if(data.weather[0].main == "Clear"){
    document.querySelector(".sun").src ="image/sun.png"
   }

 else if(data.weather[0].main == "Rain"){
    document.querySelector(".sun").src ="image/rain.gif"
     
   }

 

else if(data.weather[0].main == "Drizzle"){
       
   }

   else if(data.weather[0].main == "Snow"){
       
   }


   document.querySelector(".weather").style.display = "block";
}  

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});




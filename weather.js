document.querySelector('.js-search-button').addEventListener('click',()=>{
  const searchInput=document.querySelector('.js-search-input')

  const city=searchInput.value;
  getWeather(city);

});

document.querySelector('.card').addEventListener('keydown',(event)=>{
  if(event.key==='Enter'){
    const searchInput=document.querySelector('.js-search-input')

    const city=searchInput.value;
    getWeather(city);
  }

})

async function getWeather(city){

  const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=61ab8821759cb104b8ab17b077edbbb6&units=metric`);
  let info= await response.json();
  console.log(info);
  
  document.querySelector('.js-temperature').innerHTML=Math.round(info.main.temp)+'&degC';

  document.querySelector('.js-city').innerHTML=info.name;

  document.querySelector('.js-humidity-value').innerHTML=info.main.humidity+'%';

  document.querySelector('.js-wind-speed-value').innerHTML=info.wind.speed+ ' km/h';

  const weatherIcon=document.querySelector('.js-weather-icon');

  if(info.weather[0].main==='Clouds'){
    weatherIcon.src='images/clouds.png';
  } 
  else if(info.weather[0].main==='Clear'){
    weatherIcon.src='images/clear.png';
  }
  else if(info.weather[0].main==='Drizzle'){
    weatherIcon.src='images/drizzle.png';
  }
  else if(info.weather[0].main==='Mist'){
    weatherIcon.src='images/mist.png';
  }
  else if(info.weather[0].main==='Rain'){
    weatherIcon.src='images/rain.png';
  }
  else if(info.weather[0].main==='Snow'){
    weatherIcon.src='images/snow.png';
  }


  };





import { unit } from "./unit";
import { kelvinToUnit } from "./kelvinToUnit";
import { getDayOfWeek } from "./getDayOfWeek";
import { forecast } from "./forecast";
import { toTitleCase } from "./titleCase";

export function updateHTML(data){
    const $currentWeatherIcon = document.getElementById('current_weather_icon');
    const $currentTemp = document.getElementById('current_temp');
    const $currentDay = document.getElementById('current_day');
    const $currentTime = document.getElementById('current_time');
    const $weatherDescription = document.getElementById('weather_description');
    const $feelsLike = document.getElementById('feels_like');
    const $searchLocation = document.getElementById('search_location');
    const $locationImg = document.getElementById('location_img');
    const $locationName = document.getElementById('location_name');
    $locationImg.setAttribute('src',`https://source.unsplash.com/1600x900/?${$searchLocation.value}`);
    $locationName.innerText = toTitleCase($searchLocation.value);    
    
    let date = new Date(data.current.dt * 1000);
    let time = date.toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'});  

    $currentWeatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`);
    $currentTemp.innerText = `
        ${kelvinToUnit(unit, data.current.temp)}°${unit === 'celsius'? 'C':'F'}
        `;
    $currentDay.innerText = `${getDayOfWeek(date)}`;
    $currentTime.innerText = `${time}`;
    $weatherDescription.innerText = `${toTitleCase(data.current.weather[0].description)}`;
    $feelsLike.innerText = `Feels Like - ${kelvinToUnit(unit, data.current.feels_like)}°${unit === 'celsius'? 'C':'F'}
     `;

    if(forecast === 'daily'){
        forecastDaily(data);
    }else if(forecast === 'hourly')
        forecastHourly(data);
    else{
        
    }

}


function forecastDaily(data){
    const $forecast = document.getElementById('forecast');
    $forecast.innerHTML = data.daily
        .map((day) => {
            var forecastDate = new Date(day.dt * 1000);
            return `
                <div class="forecast-card">
                    <p class="forecast-day">
                        ${getDayOfWeek(forecastDate)}
                    </p>
                    <img class="forecast-image" src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="Forecast Image">
                    <div class="forecast-temp">
                        <p class="day-temperature">${kelvinToUnit(unit, day.temp.day)}° </p>
                        <p class="night-temperature">${kelvinToUnit(unit, day.temp.night)}°</p>
                    </div>
                </div>
            `
        })
        .join(' ');
}

function forecastHourly(data){
    const $forecast = document.getElementById('forecast');
    $forecast.innerHTML = data.hourly
        .map((hour, idx) => {
            if(idx <= 24){
                var time = new Date(hour.dt * 1000);
                time = time.toLocaleTimeString('en-GB',{hour: '2-digit', minute:'2-digit'})
                return `
                    <div class="forecast-card">
                        <p class="forecast-day">
                            ${time}
                        </p>
                        <img class="forecast-image" src="http://openweathermap.org/img/wn/${hour.weather[0].icon}.png" alt="Forecast Image">
                        <div class="forecast-temp">
                            <p class="day-temperature">${kelvinToUnit(unit, hour.temp)}°</p>
                        </div>
                    </div>
                `
            }
        })
        .join(' ');
}

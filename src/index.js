import { getWeather } from './scripts/getWeather';
import { setForecast } from './scripts/forecast';
import { setUnit} from './scripts/unit'; 


getWeather('London');


const $searchLocation = document.getElementById('search_location');
const $unitCelsiusButton = document.getElementById('unit_celsius');
const $unitFahrenheitButton = document.getElementById('unit_fahrenheit');
const $forecastDailyButton = document.getElementById('forecast_daily');
const $forecastHourlyButton = document.getElementById('forecast_hourly');

$searchLocation.value = 'London';

let city = $searchLocation.value;

$searchLocation.addEventListener('input',() => {
    city = $searchLocation.value;
});

window.addEventListener('keydown', (e) =>{
    if(e.keyCode === 13){
        getWeather(city);
    }
});


$unitCelsiusButton.addEventListener('click', function(){
    setUnit('celsius');
    getWeather(city);
    $unitCelsiusButton.classList.add('unit-active');
    $unitFahrenheitButton.classList.remove('unit-active');
})

$unitFahrenheitButton.addEventListener('click', function(){
    setUnit('fahrenheit');
    getWeather(city);
    $unitCelsiusButton.classList.remove('unit-active');
    $unitFahrenheitButton.classList.add('unit-active');
})

$forecastDailyButton.addEventListener('click', function(){
    setForecast('daily');
    getWeather(city);
    $forecastDailyButton.classList.add('forecast-active');
    $forecastHourlyButton.classList.remove('forecast-active');
})

$forecastHourlyButton.addEventListener('click', function(){
    setForecast('hourly');
    getWeather(city);
    $forecastDailyButton.classList.remove('forecast-active');
    $forecastHourlyButton.classList.add('forecast-active');
})
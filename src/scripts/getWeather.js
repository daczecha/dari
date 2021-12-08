import { updateHTML } from "./updateHTML";
import { loading } from "./Loading";

export function getWeather(city){
    const key = '98907e216af46edfc1bda8ca30d4cdd1';
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`;
    
    fetch(url)
            .then(resp =>{
                return resp.json();
            })
            .then(data =>{
                fetchWeather(data[0].lat, data[0].lon);
            });
}

function fetchWeather(lat, lon){
    let key = '98907e216af46edfc1bda8ca30d4cdd1';
    let units = 'metric';
    let lang = 'en';
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}$lang=${lang}`;
    fetch(url)
        .then(resp =>{
            return resp.json();
        })
        .then(data =>{
            loading();
            updateHTML(data);
        })
        .then(loading())
}

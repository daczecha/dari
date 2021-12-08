export function kelvinToUnit(unit, temperature){
    if(unit === 'celsius'){
        temperature = temperature - 273.15;
        temperature = Math.round((temperature + Number.EPSILON) * 10) / 10;
        
        return temperature;
    }else if(unit === 'fahrenheit'){
        temperature = (temperature - 273.15) * (9/5) + 32;
        temperature = Math.round((temperature + Number.EPSILON) * 10) / 10;
        
        return temperature;
    }
}
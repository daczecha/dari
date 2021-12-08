/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/getWeather */ \"./src/scripts/getWeather.js\");\n/* harmony import */ var _scripts_forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/forecast */ \"./src/scripts/forecast.js\");\n/* harmony import */ var _scripts_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/unit */ \"./src/scripts/unit.js\");\n\n\n \n\n\n(0,_scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)('London');\n\n\nconst $searchLocation = document.getElementById('search_location');\nconst $unitCelsiusButton = document.getElementById('unit_celsius');\nconst $unitFahrenheitButton = document.getElementById('unit_fahrenheit');\nconst $forecastDailyButton = document.getElementById('forecast_daily');\nconst $forecastHourlyButton = document.getElementById('forecast_hourly');\n\n$searchLocation.value = 'London';\n\nlet city = $searchLocation.value;\n\n$searchLocation.addEventListener('input',() => {\n    city = $searchLocation.value;\n});\n\nwindow.addEventListener('keydown', (e) =>{\n    if(e.keyCode === 13){\n        (0,_scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city);\n    }\n});\n\n\n$unitCelsiusButton.addEventListener('click', function(){\n    (0,_scripts_unit__WEBPACK_IMPORTED_MODULE_2__.setUnit)('celsius');\n    (0,_scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city);\n    $unitCelsiusButton.classList.add('unit-active');\n    $unitFahrenheitButton.classList.remove('unit-active');\n})\n\n$unitFahrenheitButton.addEventListener('click', function(){\n    ;(0,_scripts_unit__WEBPACK_IMPORTED_MODULE_2__.setUnit)('fahrenheit');\n    (0,_scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city);\n    $unitCelsiusButton.classList.remove('unit-active');\n    $unitFahrenheitButton.classList.add('unit-active');\n})\n\n$forecastDailyButton.addEventListener('click', function(){\n    ;(0,_scripts_forecast__WEBPACK_IMPORTED_MODULE_1__.setForecast)('daily');\n    (0,_scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city);\n    $forecastDailyButton.classList.add('forecast-active');\n    $forecastHourlyButton.classList.remove('forecast-active');\n})\n\n$forecastHourlyButton.addEventListener('click', function(){\n    ;(0,_scripts_forecast__WEBPACK_IMPORTED_MODULE_1__.setForecast)('hourly');\n    (0,_scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city);\n    $forecastDailyButton.classList.remove('forecast-active');\n    $forecastHourlyButton.classList.add('forecast-active');\n})\n\n//# sourceURL=webpack://dari/./src/index.js?");

/***/ }),

/***/ "./src/scripts/Loading.js":
/*!********************************!*\
  !*** ./src/scripts/Loading.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loading\": () => (/* binding */ loading)\n/* harmony export */ });\nfunction loading(){\n    isLoading = !isLoading;    \n    if(isLoading === true){\n        document.getElementById('loading').style.display = 'flex';\n        document.getElementById('app').classList.add('hide');\n    }else{\n        document.getElementById('loading').style.display = 'none';\n        document.getElementById('app').classList.remove('hide');\n    }\n}\n\nlet isLoading = false;\n\n//# sourceURL=webpack://dari/./src/scripts/Loading.js?");

/***/ }),

/***/ "./src/scripts/forecast.js":
/*!*********************************!*\
  !*** ./src/scripts/forecast.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forecast\": () => (/* binding */ forecast),\n/* harmony export */   \"setForecast\": () => (/* binding */ setForecast)\n/* harmony export */ });\nlet forecast = 'daily';\n\nfunction setForecast(input){\n    forecast = input;\n}\n\n\n\n\n//# sourceURL=webpack://dari/./src/scripts/forecast.js?");

/***/ }),

/***/ "./src/scripts/getDayOfWeek.js":
/*!*************************************!*\
  !*** ./src/scripts/getDayOfWeek.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDayOfWeek\": () => (/* binding */ getDayOfWeek)\n/* harmony export */ });\nfunction getDayOfWeek(date) {\n    const dayOfWeek = new Date(date).getDay();    \n    return isNaN(dayOfWeek) ? null : \n      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];\n}\n\n//# sourceURL=webpack://dari/./src/scripts/getDayOfWeek.js?");

/***/ }),

/***/ "./src/scripts/getWeather.js":
/*!***********************************!*\
  !*** ./src/scripts/getWeather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _updateHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateHTML */ \"./src/scripts/updateHTML.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ \"./src/scripts/Loading.js\");\n\n\n\nfunction getWeather(city){\n    const key = '98907e216af46edfc1bda8ca30d4cdd1';\n    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`;\n    \n    fetch(url)\n            .then(resp =>{\n                return resp.json();\n            })\n            .then(data =>{\n                fetchWeather(data[0].lat, data[0].lon);\n            });\n}\n\nfunction fetchWeather(lat, lon){\n    let key = '98907e216af46edfc1bda8ca30d4cdd1';\n    let units = 'metric';\n    let lang = 'en';\n    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}$lang=${lang}`;\n    fetch(url)\n        .then(resp =>{\n            return resp.json();\n        })\n        .then(data =>{\n            (0,_Loading__WEBPACK_IMPORTED_MODULE_1__.loading)();\n            (0,_updateHTML__WEBPACK_IMPORTED_MODULE_0__.updateHTML)(data);\n        })\n        .then((0,_Loading__WEBPACK_IMPORTED_MODULE_1__.loading)())\n}\n\n//# sourceURL=webpack://dari/./src/scripts/getWeather.js?");

/***/ }),

/***/ "./src/scripts/kelvinToUnit.js":
/*!*************************************!*\
  !*** ./src/scripts/kelvinToUnit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kelvinToUnit\": () => (/* binding */ kelvinToUnit)\n/* harmony export */ });\nfunction kelvinToUnit(unit, temperature){\n    if(unit === 'celsius'){\n        temperature = temperature - 273.15;\n        temperature = Math.round((temperature + Number.EPSILON) * 10) / 10;\n        \n        return temperature;\n    }else if(unit === 'fahrenheit'){\n        temperature = (temperature - 273.15) * (9/5) + 32;\n        temperature = Math.round((temperature + Number.EPSILON) * 10) / 10;\n        \n        return temperature;\n    }\n}\n\n//# sourceURL=webpack://dari/./src/scripts/kelvinToUnit.js?");

/***/ }),

/***/ "./src/scripts/titleCase.js":
/*!**********************************!*\
  !*** ./src/scripts/titleCase.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toTitleCase\": () => (/* binding */ toTitleCase)\n/* harmony export */ });\nfunction toTitleCase(str) {\n    return str.replace(\n      /\\w\\S*/g,\n      function(txt) {\n        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();\n      }\n    );\n}\n\n//# sourceURL=webpack://dari/./src/scripts/titleCase.js?");

/***/ }),

/***/ "./src/scripts/unit.js":
/*!*****************************!*\
  !*** ./src/scripts/unit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unit\": () => (/* binding */ unit),\n/* harmony export */   \"setUnit\": () => (/* binding */ setUnit)\n/* harmony export */ });\nlet unit = 'celsius';\n\nfunction setUnit(input){\n    unit = input;\n}\n\n\n\n\n//# sourceURL=webpack://dari/./src/scripts/unit.js?");

/***/ }),

/***/ "./src/scripts/updateHTML.js":
/*!***********************************!*\
  !*** ./src/scripts/updateHTML.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateHTML\": () => (/* binding */ updateHTML)\n/* harmony export */ });\n/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit */ \"./src/scripts/unit.js\");\n/* harmony import */ var _kelvinToUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kelvinToUnit */ \"./src/scripts/kelvinToUnit.js\");\n/* harmony import */ var _getDayOfWeek__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDayOfWeek */ \"./src/scripts/getDayOfWeek.js\");\n/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecast */ \"./src/scripts/forecast.js\");\n/* harmony import */ var _titleCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./titleCase */ \"./src/scripts/titleCase.js\");\n\n\n\n\n\n\nfunction updateHTML(data){\n    const $currentWeatherIcon = document.getElementById('current_weather_icon');\n    const $currentTemp = document.getElementById('current_temp');\n    const $currentDay = document.getElementById('current_day');\n    const $currentTime = document.getElementById('current_time');\n    const $weatherDescription = document.getElementById('weather_description');\n    const $feelsLike = document.getElementById('feels_like');\n    const $searchLocation = document.getElementById('search_location');\n    const $locationImg = document.getElementById('location_img');\n    const $locationName = document.getElementById('location_name');\n    $locationImg.setAttribute('src',`https://source.unsplash.com/1600x900/?${$searchLocation.value}`);\n    $locationName.innerText = (0,_titleCase__WEBPACK_IMPORTED_MODULE_4__.toTitleCase)($searchLocation.value);    \n    \n    let date = new Date(data.current.dt * 1000);\n    let time = date.toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'});  \n\n    $currentWeatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`);\n    $currentTemp.innerText = `\n        ${(0,_kelvinToUnit__WEBPACK_IMPORTED_MODULE_1__.kelvinToUnit)(_unit__WEBPACK_IMPORTED_MODULE_0__.unit, data.current.temp)}°${_unit__WEBPACK_IMPORTED_MODULE_0__.unit === 'celsius'? 'C':'F'}\n        `;\n    $currentDay.innerText = `${(0,_getDayOfWeek__WEBPACK_IMPORTED_MODULE_2__.getDayOfWeek)(date)}`;\n    $currentTime.innerText = `${time}`;\n    $weatherDescription.innerText = `${(0,_titleCase__WEBPACK_IMPORTED_MODULE_4__.toTitleCase)(data.current.weather[0].description)}`;\n    $feelsLike.innerText = `Feels Like - ${(0,_kelvinToUnit__WEBPACK_IMPORTED_MODULE_1__.kelvinToUnit)(_unit__WEBPACK_IMPORTED_MODULE_0__.unit, data.current.feels_like)}°${_unit__WEBPACK_IMPORTED_MODULE_0__.unit === 'celsius'? 'C':'F'}\n     `;\n\n    if(_forecast__WEBPACK_IMPORTED_MODULE_3__.forecast === 'daily'){\n        forecastDaily(data);\n    }else if(_forecast__WEBPACK_IMPORTED_MODULE_3__.forecast === 'hourly')\n        forecastHourly(data);\n    else{\n        \n    }\n\n}\n\n\nfunction forecastDaily(data){\n    const $forecast = document.getElementById('forecast');\n    $forecast.innerHTML = data.daily\n        .map((day) => {\n            var forecastDate = new Date(day.dt * 1000);\n            return `\n                <div class=\"forecast-card\">\n                    <p class=\"forecast-day\">\n                        ${(0,_getDayOfWeek__WEBPACK_IMPORTED_MODULE_2__.getDayOfWeek)(forecastDate)}\n                    </p>\n                    <img class=\"forecast-image\" src=\"http://openweathermap.org/img/wn/${day.weather[0].icon}.png\" alt=\"Forecast Image\">\n                    <div class=\"forecast-temp\">\n                        <p class=\"day-temperature\">${(0,_kelvinToUnit__WEBPACK_IMPORTED_MODULE_1__.kelvinToUnit)(_unit__WEBPACK_IMPORTED_MODULE_0__.unit, day.temp.day)}° </p>\n                        <p class=\"night-temperature\">${(0,_kelvinToUnit__WEBPACK_IMPORTED_MODULE_1__.kelvinToUnit)(_unit__WEBPACK_IMPORTED_MODULE_0__.unit, day.temp.night)}°</p>\n                    </div>\n                </div>\n            `\n        })\n        .join(' ');\n}\n\nfunction forecastHourly(data){\n    const $forecast = document.getElementById('forecast');\n    $forecast.innerHTML = data.hourly\n        .map((hour, idx) => {\n            if(idx <= 24){\n                var time = new Date(hour.dt * 1000);\n                time = time.toLocaleTimeString('en-GB',{hour: '2-digit', minute:'2-digit'})\n                return `\n                    <div class=\"forecast-card\">\n                        <p class=\"forecast-day\">\n                            ${time}\n                        </p>\n                        <img class=\"forecast-image\" src=\"http://openweathermap.org/img/wn/${hour.weather[0].icon}.png\" alt=\"Forecast Image\">\n                        <div class=\"forecast-temp\">\n                            <p class=\"day-temperature\">${(0,_kelvinToUnit__WEBPACK_IMPORTED_MODULE_1__.kelvinToUnit)(_unit__WEBPACK_IMPORTED_MODULE_0__.unit, hour.temp)}°</p>\n                        </div>\n                    </div>\n                `\n            }\n        })\n        .join(' ');\n}\n\n\n//# sourceURL=webpack://dari/./src/scripts/updateHTML.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
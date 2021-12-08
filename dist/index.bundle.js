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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    margin:0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-family: Courier, monospace;\\n}\\n\\n#app{\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.button-unit-container{\\n    display: flex;\\n    margin:0 0 20px 0;\\n    gap:0;\\n}\\n\\n.unit-button{\\n    padding: 10px 20px;\\n    outline: none;\\n    border: none;\\n    box-shadow: none;\\n    cursor:pointer;\\n}\\n\\n.unit-active{\\n    background-color: black;\\n    color:white;\\n}\\n\\n\\n.brief-information{\\n    position: relative;\\n    width: 100%;\\n    height: 100vh;\\n    display:flex;\\n    align-items: center;\\n    flex-direction: column;\\n    justify-content: center;\\n}\\n\\ninput{\\n    padding: 5px 10px;\\n    outline: none;\\n    border:1px solid gray;\\n    border-radius: 15px;\\n}\\n\\n.container{\\n    background-color:rgba(255, 255, 255);\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n    padding:2.9em 4em;\\n    border-radius: 20px;\\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\\n    gap:20px;\\n}\\n\\n.info{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.location-image{\\n    display: block;\\n    position:absolute;\\n    top:0;\\n    left:0;\\n    width: 100%;\\n    height: 100%;\\n    z-index:-1;\\n    object-fit: cover;\\n    overflow:hidden;\\n\\n}\\n\\n#location_img{\\n    display: block;\\n    height: 100%;\\n    width: 100%;\\n    filter: brightness(0.4);\\n}\\n\\n\\n.main{\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    padding: 20px;\\n    gap:20px;\\n}\\n\\n#forecast{\\n    width: 80%;\\n    max-width: 80%;\\n    display: flex;\\n    overflow-x: auto;\\n    gap:20px;\\n    justify-content: start;\\n}\\n\\n.forecast-card{\\n    width: 200px;\\n    padding: 3rem;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n    border:1px solid lightgray;\\n    gap:20px;\\n    border-radius: 15px;\\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\\n    flex: 1 0 auto;\\n\\n}\\n\\n.forecast-button{\\n    border:0;\\n    outline:0;\\n    background: transparent;\\n    cursor: pointer;\\n    padding: 10px 20px;\\n    font-size: 18px;\\n    border-bottom: 2px solid lightgray;\\n}\\n\\n.forecast-active{\\n    border-bottom: 2px solid black;\\n}\\n\\n.forecast-temp{\\n    display: flex;\\n}\\n.night-temperature{\\n    padding: 0 0 0 10px;\\n    opacity:.4;\\n}\\n\\n.forecast-image{\\n    width:70px;\\n}\\n\\n.footer{\\n    margin-top:50px;\\n\\n}\\n\\n.hide{\\n    display: none;\\n}\\n\\n\\n#loading{\\n    position: absolute;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    background-color: white;\\n    width: 100vw;\\n    height: 100vh;\\n    z-index: 100;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dari/./src/css/app.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://dari/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dari/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./app.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/app.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://dari/./src/css/app.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dari/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://dari/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://dari/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://dari/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://dari/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://dari/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/getWeather */ \"./src/scripts/getWeather.js\");\n/* harmony import */ var _scripts_forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/forecast */ \"./src/scripts/forecast.js\");\n/* harmony import */ var _scripts_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/unit */ \"./src/scripts/unit.js\");\n\n\n \n__webpack_require__(/*! ./css/app.css */ \"./src/css/app.css\")\n\n;(0,_scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)('London');\n\n\nconst $searchLocation = document.getElementById('search_location');\nconst $unitCelsiusButton = document.getElementById('unit_celsius');\nconst $unitFahrenheitButton = document.getElementById('unit_fahrenheit');\nconst $forecastDailyButton = document.getElementById('forecast_daily');\nconst $forecastHourlyButton = document.getElementById('forecast_hourly');\n\n$searchLocation.value = 'London';\n\nlet city = $searchLocation.value;\n\n$searchLocation.addEventListener('input',() => {\n    city = $searchLocation.value;\n});\n\nwindow.addEventListener('keydown', (e) =>{\n    if(e.keyCode === 13){\n        (0,_scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city);\n    }\n});\n\n\n$unitCelsiusButton.addEventListener('click', function(){\n    (0,_scripts_unit__WEBPACK_IMPORTED_MODULE_2__.setUnit)('celsius');\n    (0,_scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city);\n    $unitCelsiusButton.classList.add('unit-active');\n    $unitFahrenheitButton.classList.remove('unit-active');\n})\n\n$unitFahrenheitButton.addEventListener('click', function(){\n    ;(0,_scripts_unit__WEBPACK_IMPORTED_MODULE_2__.setUnit)('fahrenheit');\n    (0,_scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city);\n    $unitCelsiusButton.classList.remove('unit-active');\n    $unitFahrenheitButton.classList.add('unit-active');\n})\n\n$forecastDailyButton.addEventListener('click', function(){\n    ;(0,_scripts_forecast__WEBPACK_IMPORTED_MODULE_1__.setForecast)('daily');\n    (0,_scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city);\n    $forecastDailyButton.classList.add('forecast-active');\n    $forecastHourlyButton.classList.remove('forecast-active');\n})\n\n$forecastHourlyButton.addEventListener('click', function(){\n    ;(0,_scripts_forecast__WEBPACK_IMPORTED_MODULE_1__.setForecast)('hourly');\n    (0,_scripts_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city);\n    $forecastDailyButton.classList.remove('forecast-active');\n    $forecastHourlyButton.classList.add('forecast-active');\n})\n\n//# sourceURL=webpack://dari/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _updateHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateHTML */ \"./src/scripts/updateHTML.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ \"./src/scripts/Loading.js\");\n\n\n\nfunction getWeather(city){\n    const key = '98907e216af46edfc1bda8ca30d4cdd1';\n    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`;\n    \n    fetch(url)\n            .then(resp =>{\n                return resp.json();\n            })\n            .then(data =>{\n                fetchWeather(data[0].lat, data[0].lon);\n            });\n}\n\nfunction fetchWeather(lat, lon){\n    let key = '98907e216af46edfc1bda8ca30d4cdd1';\n    let units = 'metric';\n    let lang = 'en';\n    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}$lang=${lang}`;\n    fetch(url)\n        .then(resp =>{\n            return resp.json();\n        })\n        .then(data =>{\n            (0,_Loading__WEBPACK_IMPORTED_MODULE_1__.loading)();\n            (0,_updateHTML__WEBPACK_IMPORTED_MODULE_0__.updateHTML)(data);\n        })\n        .then((0,_Loading__WEBPACK_IMPORTED_MODULE_1__.loading)())\n}\n\n\n//# sourceURL=webpack://dari/./src/scripts/getWeather.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
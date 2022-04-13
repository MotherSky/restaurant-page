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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about)\n/* harmony export */ });\nfunction about(){\r\n    const element = document.createElement('div');\r\n    element.classList.add(\"About\", \"content-item\");\r\n    return (element);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home(){\r\n    const HomeContent = document.createElement('div');\r\n    const imageDiv = document.createElement('div');\r\n    const descriptionDiv = document.createElement('div');\r\n    const awardsDiv = document.createElement('div');\r\n\r\n    HomeContent.classList.add(\"Home\", \"content-item\", \"active-content\");\r\n    imageDiv.classList.add(\"image-div\");\r\n    descriptionDiv.classList.add(\"description-div\");\r\n    awardsDiv.classList.add(\"awards-div\");\r\n\r\n    const boldTitle = document.createElement('p');\r\n    const slogan = document.createElement('p'); \r\n    const description = document.createElement('p'); \r\n\r\n    boldTitle.innerText = \"Home Burger Bar\";\r\n    slogan.innerText = \"Because There is no place like Home.\";\r\n    description.innerText = `Since the conception of Home Burger Bar to its current execution, the mission remains the same: influencing the idea of the perfect burger bar.\r\n\r\n    This is why we cook with heart and create out of passion. At Home Bar Burger we prefer brie for cheese and we braise our meats.\r\n    We place eclectic over specific and mix ingredients with a hunger for new experiences. Expect of us to be different and look forward to be surprised. In return we will serve you a new culture where there is no needed timing for comfort dining, service is caring and indulging means sharing.`;\r\n    slogan.classList.add(\"medium-text\");\r\n    boldTitle.classList.add(\"big-text\");\r\n    description.classList.add(\"small-text\");\r\n\r\n    for (let i = 0; i < 5; i++){\r\n        let img = document.createElement('img');\r\n        img.setAttribute(\"src\", \"../images/s1 \" + i + \".png\");\r\n        awardsDiv.appendChild(img);\r\n    }\r\n\r\n    imageDiv.appendChild(boldTitle);\r\n    imageDiv.appendChild(slogan);\r\n    descriptionDiv.appendChild(description);\r\n    HomeContent.appendChild(imageDiv);\r\n    HomeContent.appendChild(descriptionDiv);\r\n    HomeContent.appendChild(awardsDiv);\r\n    return (HomeContent);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.js */ \"./src/location.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\nconst contentDiv = document.querySelector(\"#content\");\r\nconst body = document.body;\r\n\r\nfunction createHeaderItems(){\r\n    const list = document.createElement(\"ul\");\r\n    let items = Array(4);\r\n    const itemsContent = [\"Home\", \"Menu\", \"Location\", \"About\"];\r\n    for (let i = 0; i < items.length; i++){\r\n        items[i] = document.createElement(\"li\"); // create 4 ul items\r\n        items[i].textContent = itemsContent[i]; // change the text of each li\r\n        items[i].classList.add(itemsContent[i]); // add a class for each li\r\n        items[i].classList.add(\"header-item\");\r\n        list.appendChild(items[i]); // add each element to parent(ul)\r\n    }\r\n    list.firstChild.classList.add(\"active-item\"); // add active-item class to first item(home)\r\n    return (list);\r\n}\r\n\r\nfunction selectTab(){\r\n    const headerItems = document.querySelectorAll(\".header-item\");\r\n    const contentItems = document.querySelectorAll(\".content-item\");\r\n    headerItems.forEach((item) => {\r\n        item.addEventListener(\"click\", (e) => {\r\n            if (!e.target.classList.contains(\"active-item\")){ // if the item isn't active already\r\n                headerItems.forEach((item) => item.classList.remove(\"active-item\")); // remove other active items\r\n                e.target.classList.add(\"active-item\");\r\n                console.log(contentItems);\r\n                contentItems.forEach((item) => {\r\n                    item.classList.remove(\"active-content\");\r\n                });\r\n                const activeClass = e.target.classList[0]; // get first item class (Home/Menu/Location/About...)\r\n                const activeContent = document.querySelectorAll(\".\" + activeClass)[1]; // the second node should be the active content item\r\n                activeContent.classList.add(\"active-content\");\r\n            }\r\n        })\r\n    });\r\n}\r\n\r\nfunction createHeader(){\r\n    const header = document.createElement(\"div\");\r\n    header.id = \"header\";\r\n    header.appendChild(createHeaderItems());\r\n    return header;\r\n}\r\n\r\nbody.insertBefore(createHeader(), contentDiv);\r\ncontentDiv.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_location_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), (0,_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\nselectTab();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ location)\n/* harmony export */ });\nfunction location(){\r\n    const element = document.createElement('div');\r\n    element.classList.add(\"Location\", \"content-item\");\r\n    return (element);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/location.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\r\n    const element = document.createElement('div');\r\n    element.classList.add(\"Menu\", \"content-item\");\r\n    return (element);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home(){\r\n    const HomeContent = document.createElement('div');\r\n    const imageDiv = document.createElement('div');\r\n    const descriptionDiv = document.createElement('div');\r\n    const awardsDiv = document.createElement('div');\r\n\r\n    HomeContent.classList.add(\"Home\", \"content-item\"); // ADD active-content when finished testing\r\n    imageDiv.classList.add(\"image-div\");\r\n    descriptionDiv.classList.add(\"description-div\");\r\n    awardsDiv.classList.add(\"awards-div\");\r\n\r\n    const boldTitle = document.createElement('p');\r\n    const slogan = document.createElement('p'); \r\n    const description = document.createElement('p'); \r\n\r\n    boldTitle.innerText = \"Home Burger Bar\";\r\n    slogan.innerText = \"Because There is no place like Home.\";\r\n    description.innerText = `Since the conception of Home Burger Bar to its current execution, the mission remains the same: influencing the idea of the perfect burger bar.\r\n\r\n    This is why we cook with heart and create out of passion. At Home Bar Burger we prefer brie for cheese and we braise our meats.\r\n    We place eclectic over specific and mix ingredients with a hunger for new experiences. Expect of us to be different and look forward to be surprised. In return we will serve you a new culture where there is no needed timing for comfort dining, service is caring and indulging means sharing.`;\r\n    slogan.classList.add(\"medium-text\");\r\n    boldTitle.classList.add(\"big-text\");\r\n    description.classList.add(\"small-text\");\r\n\r\n    for (let i = 0; i < 5; i++){ // create 5 nodes and add awards to each one\r\n        let img = document.createElement('img');\r\n        img.setAttribute(\"src\", \"../images/s1 \" + i + \".png\");\r\n        awardsDiv.appendChild(img);\r\n    }\r\n\r\n    imageDiv.appendChild(boldTitle);\r\n    imageDiv.appendChild(slogan);\r\n    descriptionDiv.appendChild(description);\r\n    HomeContent.appendChild(imageDiv);\r\n    HomeContent.appendChild(descriptionDiv);\r\n    HomeContent.appendChild(awardsDiv);\r\n    return (HomeContent);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.js */ \"./src/location.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\nconst contentDiv = document.querySelector(\"#content\");\r\nconst body = document.body;\r\n\r\nfunction createHeaderItems(){\r\n    const list = document.createElement(\"ul\");\r\n    let items = Array(4);\r\n    const itemsContent = [\"Home\", \"Menu\", \"Location\", \"About\"];\r\n    for (let i = 0; i < items.length; i++){\r\n        items[i] = document.createElement(\"li\"); // create 4 ul items\r\n        items[i].textContent = itemsContent[i]; // change the text of each li\r\n        items[i].classList.add(itemsContent[i]); // add a class for each li\r\n        items[i].classList.add(\"header-item\");\r\n        list.appendChild(items[i]); // add each element to parent(ul)\r\n    }\r\n    list.children[1].classList.add(\"active-item\"); // add active-item class to first item(home) (ADD IT BACK TO FIRST CHILD WHEN FINISHED TESTING)\r\n    return (list);\r\n}\r\n\r\nfunction selectTab(){\r\n    const headerItems = document.querySelectorAll(\".header-item\");\r\n    const contentItems = document.querySelectorAll(\".content-item\");\r\n    headerItems.forEach((item) => {\r\n        item.addEventListener(\"click\", (e) => {\r\n            if (!e.target.classList.contains(\"active-item\")){ // if the item isn't active already\r\n                headerItems.forEach((item) => item.classList.remove(\"active-item\")); // remove other active items\r\n                e.target.classList.add(\"active-item\");\r\n                contentItems.forEach((item) => {\r\n                    item.classList.remove(\"active-content\");\r\n                });\r\n                const activeClass = e.target.classList[0]; // get first item class (Home/Menu/Location/About...)\r\n                const activeContent = document.querySelectorAll(\".\" + activeClass)[1]; // the second node should be the active content item\r\n                activeContent.classList.add(\"active-content\");\r\n            }\r\n        })\r\n    });\r\n}\r\n\r\nfunction createHeader(){\r\n    const header = document.createElement(\"div\");\r\n    header.id = \"header\";\r\n    header.appendChild(createHeaderItems());\r\n    return header;\r\n}\r\n\r\nbody.insertBefore(createHeader(), contentDiv);\r\ncontentDiv.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_location_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), (0,_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\nselectTab();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction createModal(menuArray, imageArr, titleText, id){\r\n    const modalBg = document.createElement('div');\r\n    const modalContent = document.createElement('div');\r\n    const closeBtn = document.createElement('div');\r\n    closeBtn.innerText = \"\\u00D7\";\r\n    closeBtn.classList.add(\"close-btn\");\r\n    const menuImgContainer = document.createElement('div');\r\n    for (let i = 0; i < imageArr.length; i++){\r\n        let menuImg = document.createElement('img');\r\n        menuImg.setAttribute(\"src\", imageArr[i]);\r\n        menuImgContainer.appendChild(menuImg);\r\n    }\r\n    //const menuImg = document.createElement('img');\r\n    //menuImg.setAttribute(\"src\", imageArr);\r\n    //menuImgContainer.appendChild(menuImg);\r\n    const menuItems = document.createElement('div');\r\n    const menuTitle = document.createElement('p'); // Main courses || cocktails\r\n    menuTitle.textContent = titleText;\r\n    const itemsContainer = document.createElement('div');\r\n\r\n    modalBg.id = id;\r\n    modalBg.classList.add(\"modal-bg\");\r\n    modalContent.classList.add(\"modal-content\");\r\n    menuImgContainer.classList.add(\"menu-img\");\r\n    menuItems.classList.add(\"menu-items\");\r\n    menuTitle.classList.add(\"menu-title\");\r\n    itemsContainer.classList.add(\"items\");\r\n\r\n    menuArray.forEach((elem) => {\r\n        let item = document.createElement('div');\r\n        item.classList.add(\"item\");\r\n        let leftSection = document.createElement('div');\r\n        let rightSection = document.createElement('div');\r\n        leftSection.classList.add(\"left-section\");\r\n        rightSection.classList.add(\"right-section\");\r\n        let h3 = document.createElement('h3');\r\n        let p = document.createElement('p');\r\n        h3.innerText = elem.title;\r\n        p.innerText = elem.ingredients;\r\n        leftSection.append(h3, p);\r\n        p = document.createElement('p');\r\n        p.innerText = elem.price;\r\n        rightSection.append(p);\r\n        item.append(leftSection, rightSection);\r\n        itemsContainer.append(item);\r\n    })\r\n\r\n    menuItems.append(menuTitle, itemsContainer);\r\n    modalContent.append(closeBtn, menuImgContainer, menuItems);\r\n    modalBg.appendChild(modalContent);\r\n    document.body.appendChild(modalBg);\r\n}\r\n\r\nfunction createBurgersMenu(){\r\n    let burgersMenu = [{\r\n        title: \"Burger Provençal\",\r\n        ingredients: \"Rare cooking recommended! Salad, Tomato, Cheddar, Prepared Beef, (with tomato caviar, grated counting, herbs from Provence), French fries\",\r\n        price: \"15$\",\r\n    },\r\n    {\r\n        title: \"Burger L\\’Authentique\",\r\n        ingredients: \"Lettuce, tomato, marinated ground beef, caramelized onions, cheddar, Cornichons (tangy French pickles)\",\r\n        price: \"15$\",\r\n    },\r\n    {\r\n        title: \"Burger Le Fermier\",\r\n        ingredients: \"Lettuce, tomato, braised and marinated chicken, Swiss cheese, chive, mustard, garlic sauce\",\r\n        price: \"14$\",\r\n    },\r\n    {\r\n        title: \"Burger Ibérique\",\r\n        ingredients: \"Salad, Tomato, Emmental, Chorizo/Mayo Sauce, Marinated chicken (with tomato caviar and snacky chorizo), French fries\",\r\n        price: \"14$\",\r\n    },\r\n    {\r\n        title: \"Burger Végétarien\",\r\n        ingredients: \"Galette de Légumes (carrot, corn, potato, onion, curry, egg), Salad, Tomato, White sauce (Saint-Morêt, dill, cucumber, citrus juice), French fries\",\r\n        price: \"12$\",\r\n    },\r\n    ];\r\n\r\n    const burgersImgArray = [\"../images/menu-burger.jpg\", \"../images/menu-burger1.jpg\", \"../images/menu-burger2.jpg\", \"../images/menu-burger3.jpg\", \"../images/menu-burger4.jpg\",\r\n    ];\r\n    createModal(burgersMenu, burgersImgArray, \"Main courses\", \"main-courses-modal\");\r\n}\r\n\r\nfunction createCocktailsMenu(){\r\n\r\n    let cocktailsMenu = [{\r\n        title: \"North Cali Mojito\",\r\n        ingredients: \"Sauvignon Blanc, Hendricks Gin, Midori, Ginger Liquor, Pineapple Juice, Cucumber & Basil\",\r\n        price: \"12$\",\r\n    },\r\n    {\r\n        title: \"Rockin' Red Mojito\",\r\n        ingredients: \"Bacardi Dragon Berry, Grey Goose Pear Vodka, Cayenne, Mint & Lime\",\r\n        price: \"12$\",\r\n    },\r\n    {\r\n        title: \"Pirate Jack\",\r\n        ingredients: \"Jack Honey, Absolute Vanilla, Baileys Irish Cream, Rum Raisin\",\r\n        price: \"14$\",\r\n    },\r\n    {\r\n        title: \"Piña Colada Royale\",\r\n        ingredients: \"White & Malibu Rum, Pineapple, Coconut Milk, Creme de Cacao, Vanilla Bean\",\r\n        price: \"14$\",\r\n    },\r\n    {\r\n        title: \"Big Island Punch\",\r\n        ingredients: \"Southern Comfort, Bacardi Dragon Berry, Mango, Fresh Lemon & Lime\",\r\n        price: \"12$\",\r\n    },\r\n    {\r\n        title: \"Camaro Red Sangria\",\r\n        ingredients: \"Blackberry & Cherry Infused Vodka Merlot, Fresh Seasonal Fruits\",\r\n        price: \"13$\",\r\n    },\r\n    ];\r\n\r\n    const cocktailsImgArray = [\"../images/menu-cocktail.jpg\", \"../images/menu-cocktail1.jpg\", \"../images/menu-cocktail2.jpg\",\r\n    ];\r\n    createModal(cocktailsMenu, cocktailsImgArray, \"Cocktails\", \"cocktails-modal\");\r\n}\r\n\r\nlet burgersIndex = 0;\r\nlet cocktailsIndex = 0;\r\n\r\nfunction showSlides(selector, index) {\r\n    let i;\r\n    let slides = document.querySelectorAll(selector); //\"#id img\"\r\n    for (i = 0; i < slides.length; i++) {\r\n    slides[i].style.display = \"none\";  \r\n    }\r\n    if (index == slides.length) {index = 0}    \r\n    slides[index].style.display = \"block\";\r\n    index++;\r\n    setTimeout(showSlides, 2000, selector, index); // Change image every 2 seconds\r\n}\r\n\r\n/*let cocktailsIndex = 0;\r\nfunction showCocktailSlides() {\r\n    let i;\r\n    let selector = \"#cocktails-modal img\"\r\n    let slides = document.querySelectorAll(selector); //\"#id img\"\r\n    console.log(`${selector} : index = ${cocktailsIndex}`);\r\n    for (i = 0; i < slides.length; i++) {\r\n    slides[i].style.display = \"none\";  \r\n    }\r\n    cocktailsIndex++;\r\n    if (cocktailsIndex == slides.length) {cocktailsIndex = 0}    \r\n    slides[cocktailsIndex].style.display = \"block\";\r\n    setTimeout(showCocktailSlides, 2000,); // Change image every 2 seconds\r\n}*/\r\n\r\nfunction menu(){\r\n    const menuContent = document.createElement('div');\r\n    const imagesDiv = document.createElement('div');\r\n    const mainCoursesDiv = document.createElement('div');\r\n    const cocktailsDiv = document.createElement('div');\r\n    const menuText = document.createElement('p');\r\n    const mainCoursesText = document.createElement('p');\r\n    const cocktailsText = document.createElement('p');\r\n\r\n    menuContent.classList.add(\"Menu\", \"content-item\", \"active-content\"); // remove active when finished testing\r\n    imagesDiv.classList.add(\"images-div\");\r\n    mainCoursesDiv.classList.add(\"main-courses\");\r\n    cocktailsDiv.classList.add(\"cocktails\");\r\n    menuText.classList.add(\"big-text\");\r\n    mainCoursesText.classList.add(\"medium-text\");\r\n    cocktailsText.classList.add(\"medium-text\");\r\n    mainCoursesText.id = \"main-courses-text\";\r\n    cocktailsText.id = \"cocktails-text\";\r\n\r\n    menuText.innerText = \"Menu\";\r\n    mainCoursesText.innerText = \"Main Courses\";\r\n    cocktailsText.innerText = \"Cocktails\";\r\n    \r\n    createBurgersMenu();\r\n    createCocktailsMenu();\r\n    showSlides(\"#main-courses-modal img\", burgersIndex);\r\n    showSlides(\"#cocktails-modal img\", cocktailsIndex);\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target && e.target.id == \"main-courses-text\"){\r\n            document.querySelector(\"#main-courses-modal\").style.display = \"flex\";\r\n        }\r\n        if (e.target && e.target.id == \"cocktails-text\"){\r\n            document.querySelector(\"#cocktails-modal\").style.display = \"flex\";\r\n        }\r\n        if (e.target && e.target.classList.contains(\"close-btn\")){\r\n            e.target.parentNode.parentNode.style.display = \"none\";\r\n        }\r\n    });\r\n    //createCocktailsModal(cocktailsText);\r\n\r\n    mainCoursesDiv.appendChild(mainCoursesText);\r\n    cocktailsDiv.appendChild(cocktailsText);\r\n    imagesDiv.append(mainCoursesDiv, cocktailsDiv);\r\n    menuContent.append(menuText, imagesDiv);\r\n    \r\n    return (menuContent);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack://gfdgdf/./src/index.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst form = () => {\r\n    \r\n    fetch('./hero.json', {\r\n        method: 'GET'\r\n    })\r\n    .then(response => response.json())\r\n    .then(data =>{\r\n        let cards = document.querySelector('.cards')\r\n        data.forEach(data =>{\r\n            cards.innerHTML += `\r\n            <div class=\"card\">\r\n                <div class=\"card__img-box\">\r\n                    <img src=\"${data.фото}\" alt=\"giro\" class=\"card__img\">\r\n                </div>\r\n                <p id=\"name\" class=\"card__name\">${data.название}</p>\r\n                <p class=\"card__price\">1 000$</p>\r\n                <p class=\"card__kind\">${data.тип}</p>\r\n            </div>\r\n            `\r\n        })\r\n        const select = document.querySelector('#filter')\r\n        const types = document.querySelectorAll('.card__kind')\r\n        const cards1 = document.querySelectorAll('.card')\r\n    \r\n        select.addEventListener('click', ()=> {\r\n            types.forEach((type, i) => {\r\n                if (select.value === type.textContent) {\r\n                    cards1[i].style.display = \"block\"\r\n                } else if (select.value !== type.textContent) {\r\n                    cards1[i].style.display = \"none\"\r\n                } \r\n                if (select.value === \"Все\") {\r\n                    cards1.forEach(card => {\r\n                        card.style.display = \"block\"\r\n                    })\r\n                }\r\n    \r\n            })\r\n        })\r\n    })\r\n    .catch(error =>{\r\n        console.log(error);\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack://gfdgdf/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () =>  {\r\n    const modal = document.querySelector('.modal')\r\n    const btnModal = document.querySelector('.header__button')\r\n    const closeBtn = document.querySelector('.modal__close')\r\n\r\n    btnModal.addEventListener('click', () => {\r\n        modal.style.display = 'block';\r\n    })\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.style.display = 'none'\r\n    })\r\n\r\n} \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://gfdgdf/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    \r\nconst scroll = document.querySelector('.scroll'); \r\nlet counter = 0 \r\n\r\nwindow.addEventListener('scroll', () => { \r\n    if (window.pageYOffset < 200) { \r\n        scroll.style.display = \"none\" \r\n        counter++ \r\n    } if (window.pageYOffset > 500 && counter > 0) { \r\n        scroll.style.display = \"block\" \r\n    } }) \r\n    scroll.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: \"smooth\" }) }) \r\n}\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://gfdgdf/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    var slideIndex = 1;\r\nconst prev = document.querySelector('.prev')\r\nconst next = document.querySelector('.next')\r\nshowSlides(slideIndex);\r\n\r\nnext.addEventListener('click', () => {\r\n    showSlides(slideIndex += 1);\r\n})\r\n\r\nprev.addEventListener('click', () =>{\r\n    showSlides(slideIndex -= 1); \r\n})\r\n\r\nfunction showSlides(n) {\r\n    var i;\r\n    var slides = document.getElementsByClassName(\"item\");\r\n    if (n > slides.length) {\r\n      slideIndex = 1\r\n    }\r\n    if (n < 1) {\r\n        slideIndex = slides.length\r\n    }\r\n    for (i = 0; i < slides.length; i++) {\r\n        slides[i].style.display = \"none\";\r\n    }\r\n    slides[slideIndex - 1].style.display = \"block\";\r\n}\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://gfdgdf/./src/modules/slider.js?");

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
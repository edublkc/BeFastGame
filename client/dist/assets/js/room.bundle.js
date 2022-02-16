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

/***/ "./client/src/room.js":
/*!****************************!*\
  !*** ./client/src/room.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Room\": () => (/* binding */ Room)\n/* harmony export */ });\nfunction Room(){\r\n    return `\r\n    <div class=\"game\">\r\n           \r\n            <div class=\"game__room\">\r\n\r\n                <div class=\"game__left\">\r\n\r\n                    <div class=\"game__header\">\r\n                        <div class=\"game__header__logo\">\r\n                            <img src=\"assets/image/logo.png\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div id=\"room-players\" class=\"game__left__players scroll\">\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"game__right\">\r\n                    <div class=\"game__header\">\r\n                        <button id=\"start-test\" class=\"btn btn--red\">Iniciar jogo</button>\r\n\r\n                        <div class=\"game__envets__time\">\r\n                            <div class=\"timer\">\r\n                                <div class=\"timer_count\">\r\n    \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n\r\n                    <div class=\"game__events\">\r\n                        <div class=\"game__events__board\">\r\n                            \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"game__chat\">\r\n                        <div class=\"game__chat__messages scroll\">\r\n                            <ul>\r\n                                <li>\r\n                                    <span class=\"game__chat__name\">Eduardo</span>\r\n                                    <span class=\"game__chat__message\">Olá mundo</span>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"game__chat__input\">\r\n                            <input type=\"text\" placeholder=\"Mande uma mensagem para a sala...\">\r\n                            <i class=\"fas fa-paper-plane\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n    `\r\n}\n\n//# sourceURL=webpack://find-the-odd/./client/src/room.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/src/room.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
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

/***/ "./client/src/game.js":
/*!****************************!*\
  !*** ./client/src/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getListOfPlayers\": () => (/* binding */ getListOfPlayers),\n/* harmony export */   \"getCurrentPlayerId\": () => (/* binding */ getCurrentPlayerId)\n/* harmony export */ });\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.js */ \"./client/src/login.js\");\n\r\n\r\nfunction getListOfPlayers(myGame) {\r\n    listOfPlayers = Object.values(myGame.players)\r\n    console.log(listOfPlayers)\r\n    renderListOfPlayers()\r\n}\r\n\r\nfunction getCurrentPlayerId(currentPlayerId){\r\n    PlayerId = currentPlayerId\r\n}\r\n\r\nfunction renderListOfPlayers() {\r\n    const roomPlayersList = document.querySelector('#room-players')\r\n\r\n    roomPlayersList.innerHTML = ''\r\n\r\n    listOfPlayers.forEach((player) => {\r\n        roomPlayersList.innerHTML += `\r\n    <ul>\r\n        <li>\r\n            <span data-id=\"${player.id}\" class=\"player__name\">${player.name}</span>\r\n            <span class=\"player__score\">Pontos: <span class=\"player__score__number\">${player.score} </span></span>\r\n        </li>\r\n    </ul>\r\n    `\r\n    })\r\n}\r\n\r\nconst startGameTeste = document.querySelector('#start-test')\r\n\r\nvar gameStarted = null\r\nvar randomNumber = 0\r\nvar stopTime = false\r\nvar currentRound = 0\r\n\r\nvar PlayerId = ''\r\nvar listOfPlayers = []\r\n\r\n\r\n\r\nstartGameTeste.addEventListener('click', () => {\r\n    startTheGame()\r\n})\r\n\r\nfunction startTheGame() {\r\n    const matchTimerCount = document.querySelector('#round-timer-count')\r\n\r\n    const timerConfigs = {\r\n        timerHtmlElement: matchTimerCount,\r\n        type: \"matchTime\"\r\n    }\r\n\r\n    if (gameStarted == null) {\r\n        roundCount(2)\r\n        showMatchTime()\r\n        createDivsForTheBoard(276)  //MAX DE DIVS CRIADAS: 276\r\n        turnTimerCount(10, timerConfigs)\r\n        gameStarted = true\r\n    }\r\n}\r\n\r\nfunction showMatchTime() {\r\n    const matchTimeBase = document.querySelector('#round-time')\r\n    const timer = document.querySelector('#round-timer-count')\r\n\r\n    timer.style.width = \"100%\"\r\n\r\n    matchTimeBase.classList.add('game__events--actived')\r\n\r\n\r\n}\r\n\r\n\r\nfunction createDivsForTheBoard(amount) {\r\n    const board = document.querySelector('.game__events__board')\r\n\r\n    for (let i = 0; i < amount; i++) {\r\n        const div = document.createElement('div')\r\n        div.setAttribute('data-odd', '')\r\n        div.classList.add('game__events__board__draw')\r\n        board.appendChild(div)\r\n    }\r\n\r\n    setAllEmojisInDiv()\r\n}\r\n\r\n\r\nfunction setAllEmojisInDiv() {\r\n    const allDivs = document.querySelectorAll('[data-odd]')\r\n\r\n    allDivs.forEach((div) => {\r\n        div.style.backgroundImage = \"url('./assets/image/emojis/1F643.svg')\"\r\n    })\r\n\r\n    setOddEmojiInDiv()\r\n}\r\n\r\n\r\nfunction setOddEmojiInDiv() {\r\n    const allDivs = document.querySelectorAll('[data-odd]')\r\n\r\n    randomNumber = Math.floor(Math.random() * allDivs.length)\r\n\r\n    let aChosenDiv = allDivs[randomNumber]\r\n\r\n    aChosenDiv.style.backgroundImage = \"url('./assets/image/emojis/1F643Odd.svg')\"\r\n\r\n    aChosenDiv.style.border = \"1px solid red\"\r\n\r\n    setEventListenerInEmojiDivs()\r\n    showTheGameBoard()\r\n}\r\n\r\nfunction setEventListenerInEmojiDivs(){\r\n    const allDivs = document.querySelectorAll('[data-odd]')\r\n\r\n    allDivs.forEach((div,index) => {\r\n        if(index == randomNumber){\r\n            div.addEventListener('click',()=>{\r\n                clickInTheOddEmoji()\r\n            })\r\n        }else{\r\n            div.addEventListener('click',()=>{\r\n                clickInTheWrongEmoji()\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\nfunction showTheGameBoard() {\r\n    const board = document.querySelector('.game__events__board')\r\n\r\n    setTimeout(() => {\r\n        board.style.opacity = \"1\"\r\n    }, 500);\r\n}\r\n\r\nfunction turnTimerCount(maxTime, settings) {\r\n    const { timerHtmlElement, type } = settings\r\n\r\n    let percentageToDecreaseInASecond = Math.floor(1 * 100 / maxTime)\r\n    let width = 100;\r\n    let id = setInterval(frame, 1000);\r\n   \r\n    function frame() {\r\n        if(!SomethingStopTheTimer()){\r\n            if (width <= 0) {\r\n                clearInterval(id);\r\n                verifyTimerType(type)\r\n            } else {\r\n                width -= percentageToDecreaseInASecond;\r\n                timerHtmlElement.style.width = width + '%';\r\n                console.log(width)\r\n            }\r\n        }else{\r\n            clearInterval(id)\r\n        }\r\n    }\r\n}\r\n\r\nfunction SomethingStopTheTimer() {\r\n    if (stopTime) {\r\n        return true\r\n    }\r\n    return false\r\n}\r\n\r\nfunction verifyTimerType(timerType) {\r\n    switch (timerType) {\r\n        case \"matchTime\":\r\n            matchTimeOver()\r\n            break;\r\n        case \"newRoundTime\":\r\n            newRoundTimeOver()\r\n            break;\r\n    }\r\n}\r\n\r\n\r\nfunction matchTimeOver() {\r\n    removeMatchTimer()\r\n    showTheOddEmoji()\r\n    setInfoMessageNoOneWon()\r\n    showInfoMessage()\r\n    callNewRoundTimer()\r\n    console.log('MATCH TIMER OVER')\r\n}\r\n\r\nfunction newRoundTimeOver() {\r\n    removeInfoMessage()\r\n    resetGameEventBoard()\r\n    startNewRound()\r\n\r\n    console.log('NEW ROUND TIMER OVER')\r\n}\r\n\r\n\r\nfunction showTheOddEmoji() {\r\n    const allDivs = document.querySelectorAll('[data-odd]')\r\n\r\n    allDivs.forEach((div, index) => {\r\n        if (index != randomNumber) {\r\n            div.style.opacity = '0.3'\r\n        }\r\n    })\r\n}\r\n\r\n\r\nfunction removeMatchTimer() {\r\n    const timer = document.querySelector('#round-time')\r\n    timer.classList.remove('game__events--actived')\r\n}\r\n\r\nfunction showInfoMessage() {\r\n    const roundMessage = document.querySelector('#round-message')\r\n    roundMessage.classList.add('game__events--actived')\r\n}\r\n\r\n\r\nfunction checkPlayerMarkerWrong(){\r\n    let alreadyMarkedWrong = false\r\n\r\n    listOfPlayers.forEach(player => {\r\n        if (player.id == PlayerId) {\r\n            if (player.answerWrong == true){\r\n                alreadyMarkedWrong =  true\r\n            }\r\n        }\r\n    })\r\n\r\n    return alreadyMarkedWrong\r\n}\r\n\r\n\r\nfunction clickInTheOddEmoji() {\r\n    if(!checkPlayerMarkerWrong()){\r\n        stopTime = true\r\n        removeMatchTimer()\r\n\r\n        giveThePoints()\r\n        showTheOddEmoji()\r\n        setInfoMessageWhoWin()\r\n        showInfoMessage()\r\n        callNewRoundTimer()\r\n    \r\n        renderListOfPlayers()\r\n    }\r\n}\r\n\r\n\r\nvar clickInTheWrongEmoji = function (){\r\n    markAsWrongAnswer()\r\n    setWrongAnswerIcon()\r\n}\r\n\r\nfunction markAsWrongAnswer(){\r\n    \r\n    listOfPlayers = listOfPlayers.map(player => {\r\n        if (player.id == PlayerId) {\r\n            player.answerWrong = true\r\n        }\r\n        return player\r\n    })\r\n}\r\n\r\nfunction setWrongAnswerIcon(){\r\n    const playerListById = document.querySelector(`[data-id=${PlayerId}]`)\r\n    playerListById.innerHTML += ` <i class=\"fa-solid fa-circle-xmark\"></i>`\r\n    playerListById.classList.add('player__name--wrong')\r\n}\r\n\r\nfunction giveThePoints() {\r\n    listOfPlayers = listOfPlayers.map(player => {\r\n        if (player.id == PlayerId) {\r\n            player.score += 10\r\n            player.answerRight = true\r\n        }\r\n\r\n        return player\r\n    })\r\n}\r\n\r\nfunction setInfoMessageWhoWin() {\r\n    const messageText = document.querySelector('#correct-text')\r\n    messageText.classList.remove('events__message--wrong')\r\n    messageText.textContent = \"Acertou\"\r\n\r\n    const textPlayerUserNameWin = document.querySelector('.events__message__player__name')\r\n    const playerWhoWin = listOfPlayers.filter((player) => player.answerRight)\r\n\r\n    if (playerWhoWin.length > 0) {\r\n        playerWhoWin.forEach(player => {\r\n            if (player.answerRight) {\r\n                textPlayerUserNameWin.textContent = player.name\r\n            }\r\n        })\r\n    }\r\n\r\n}\r\n\r\nfunction setInfoMessageNoOneWon() {\r\n    const messageText = document.querySelector('#correct-text')\r\n    messageText.classList.add('events__message--wrong')\r\n    messageText.textContent = \"Ninguém Acertou!\"\r\n\r\n    const textPlayerUserNameWin = document.querySelector('.events__message__player__name')\r\n    textPlayerUserNameWin.textContent = ''\r\n}\r\n\r\n\r\nfunction callNewRoundTimer() {\r\n    setTimeout(()=>{\r\n        stopTime = false\r\n    },1000)\r\n    \r\n    const newRoundTime = document.querySelector('#wait-timer-count')\r\n    newRoundTime.style.width = \"100%\"\r\n\r\n    const timerConfigs = {\r\n        timerHtmlElement: newRoundTime,\r\n        type: \"newRoundTime\"\r\n    }\r\n\r\n    turnTimerCount(5, timerConfigs)\r\n}\r\n\r\n\r\nfunction removeInfoMessage() {\r\n    const roundMessage = document.querySelector('#round-message')\r\n    roundMessage.classList.remove('game__events--actived')\r\n}\r\n\r\n\r\n\r\n\r\nfunction resetGameEventBoard() {\r\n    const gameBoard = document.querySelector('.game__events__board')\r\n    gameBoard.innerHTML = ''\r\n}\r\n\r\nfunction startNewRound() {\r\n    gameStarted = null\r\n    startTheGame()\r\n}\r\n\r\nfunction roundCount(maxRound){\r\n    const roundCountText = document.querySelector('#round-count-text')\r\n    if(currentRound >= 0 && currentRound < maxRound ){\r\n        currentRound += 1\r\n        roundCountText.textContent = `RODADA ${currentRound}/${maxRound}`\r\n    }else if(currentRound == maxRound){\r\n        roundCountText.textContent = `PARTIDA TERMINOU!`\r\n    }\r\n}\n\n//# sourceURL=webpack://find-the-odd/./client/src/game.js?");

/***/ }),

/***/ "./client/src/login.js":
/*!*****************************!*\
  !*** ./client/src/login.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setUserNameInInput\": () => (/* binding */ setUserNameInInput),\n/* harmony export */   \"getUserNameInInput\": () => (/* binding */ getUserNameInInput)\n/* harmony export */ });\nconst playButton = document.querySelector('#play-button')\r\nconst roomDiv = document.querySelector('.game')\r\nconst screenHome = document.querySelector('.screen-home')\r\n\r\nlet randomUserName = ''\r\n\r\nplayButton.addEventListener('click', () => {\r\n    roomDiv.classList.add('game--actived')\r\n    screenHome.classList.remove('screen-home--actived')\r\n})\r\n\r\nfunction checkIfHasAName(){\r\n    const userNameInput = document.querySelector('#nick-input')\r\n\r\n    let inputValue = userNameInput.value.trim()\r\n\r\n    if(inputValue == ''){\r\n        return randomUserName\r\n    }\r\n    \r\n    return inputValue\r\n}\r\n\r\nfunction setUserNameInInput(userName) {\r\n    const userNameInput = document.querySelector('#nick-input')\r\n    randomUserName = userName\r\n    userNameInput.value = randomUserName\r\n}\r\n\r\nfunction getUserNameInInput(){\r\n    return checkIfHasAName()\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://find-the-odd/./client/src/login.js?");

/***/ }),

/***/ "./client/src/main.js":
/*!****************************!*\
  !*** ./client/src/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.js */ \"./client/src/login.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./client/src/game.js\");\n\r\n\r\n\r\nconst socket = io()\r\n\r\nconst playButton = document.querySelector('#play-button')\r\n\r\nsocket.on('currentUserConnected', (username) => {\r\n    ;(0,_login_js__WEBPACK_IMPORTED_MODULE_0__.setUserNameInInput)(username)\r\n})\r\n\r\nsocket.on('playersRefresh',(values)=>{\r\n    ;(0,_game_js__WEBPACK_IMPORTED_MODULE_1__.getListOfPlayers)(values.game)\r\n    ;(0,_game_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentPlayerId)(values.currentPlayerId)\r\n})\r\n\r\nplayButton.addEventListener('click',()=>{\r\n    socket.emit('setUserNameCurrentPlayer',(0,_login_js__WEBPACK_IMPORTED_MODULE_0__.getUserNameInInput)())\r\n    socket.emit('prepareTheGame')\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://find-the-odd/./client/src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./client/src/main.js");
/******/ 	
/******/ })()
;
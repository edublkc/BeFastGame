import { getUserNameInInput } from "./login.js"

export function getListOfPlayers(myGame) {
    listOfPlayers = Object.values(myGame.players)
    console.log(listOfPlayers)
    renderListOfPlayers()
}

export function getCurrentPlayerId(currentPlayerId){
    PlayerId = currentPlayerId
}

function renderListOfPlayers() {
    const roomPlayersList = document.querySelector('#room-players')

    roomPlayersList.innerHTML = ''

    listOfPlayers.forEach((player) => {
        roomPlayersList.innerHTML += `
    <ul>
        <li>
            <span data-id="${player.id}" class="player__name">${player.name}</span>
            <span class="player__score">Pontos: <span class="player__score__number">${player.score} </span></span>
        </li>
    </ul>
    `
    })
}

const startGameTeste = document.querySelector('#start-test')

var gameStarted = null
var randomNumber = 0
var stopTime = false
var currentRound = 0
var waitingForNewRound = false

var PlayerId = ''
var listOfPlayers = []



startGameTeste.addEventListener('click', () => {
    startTheGame()
})

function startTheGame() {
    const matchTimerCount = document.querySelector('#round-timer-count')

    const timerConfigs = {
        timerHtmlElement: matchTimerCount,
        type: "matchTime"
    }

    if (gameStarted == null) {
        roundCount(2)
        showMatchTime()
        createDivsForTheBoard(276)  //MAX DE DIVS CRIADAS: 276
        turnTimerCount(10, timerConfigs)
        gameStarted = true
    }
}

function showMatchTime() {
    const matchTimeBase = document.querySelector('#round-time')
    const timer = document.querySelector('#round-timer-count')

    timer.style.width = "100%"

    matchTimeBase.classList.add('game__events--actived')


}


function createDivsForTheBoard(amount) {
    const board = document.querySelector('.game__events__board')

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div')
        div.setAttribute('data-odd', '')
        div.classList.add('game__events__board__draw')
        board.appendChild(div)
    }

    setAllEmojisInDiv()
}


function setAllEmojisInDiv() {
    const allDivs = document.querySelectorAll('[data-odd]')

    allDivs.forEach((div) => {
        div.style.backgroundImage = "url('./assets/image/emojis/1F643.svg')"
    })

    setOddEmojiInDiv()
}


function setOddEmojiInDiv() {
    const allDivs = document.querySelectorAll('[data-odd]')

    randomNumber = Math.floor(Math.random() * allDivs.length)

    let aChosenDiv = allDivs[randomNumber]

    aChosenDiv.style.backgroundImage = "url('./assets/image/emojis/1F643Odd.svg')"

    aChosenDiv.style.border = "1px solid red"

    setEventListenerInEmojiDivs()
    showTheGameBoard()
}

function setEventListenerInEmojiDivs(){
    const allDivs = document.querySelectorAll('[data-odd]')

    allDivs.forEach((div,index) => {
        if(index == randomNumber){
            div.addEventListener('click',clickInTheOddEmoji)
            if(waitingForNewRound){
                div.removeEventListener('click',clickInTheOddEmoji)
            }
        }else{
            div.addEventListener('click',clickInTheWrongEmoji)
            if(waitingForNewRound){
                div.removeEventListener('click',clickInTheWrongEmoji)
            }
        }
    })

   
}




function showTheGameBoard() {
    const board = document.querySelector('.game__events__board')

    setTimeout(() => {
        board.style.opacity = "1"
    }, 500);
}

function turnTimerCount(maxTime, settings) {
    const { timerHtmlElement, type } = settings

    let percentageToDecreaseInASecond = Math.floor(1 * 100 / maxTime)
    let width = 100;
    let id = setInterval(frame, 1000);
   
    function frame() {
        if(!SomethingStopTheTimer()){
            if (width <= 0) {
                clearInterval(id);
                verifyTimerType(type)
            } else {
                width -= percentageToDecreaseInASecond;
                timerHtmlElement.style.width = width + '%';
                console.log(width)
            }
        }else{
            clearInterval(id)
        }
    }
}

function SomethingStopTheTimer() {
    if (stopTime) {
        return true
    }
    return false
}

function verifyTimerType(timerType) {
    switch (timerType) {
        case "matchTime":
            matchTimeOver()
            break;
        case "newRoundTime":
            newRoundTimeOver()
            break;
    }
}


function matchTimeOver() {
    removeMatchTimer()
    showTheOddEmoji()
    setInfoMessageNoOneWon()
    showInfoMessage()
    callNewRoundTimer()
    console.log('MATCH TIMER OVER')
}

function newRoundTimeOver() {
    waitingForNewRound = false
    removeInfoMessage()
    resetGameEventBoard()
    startNewRound()

    console.log('NEW ROUND TIMER OVER')
}


function showTheOddEmoji() {
    const allDivs = document.querySelectorAll('[data-odd]')

    allDivs.forEach((div, index) => {
        if (index != randomNumber) {
            div.style.opacity = '0.3'
        }
    })
}


function removeMatchTimer() {
    const timer = document.querySelector('#round-time')
    timer.classList.remove('game__events--actived')
}

function showInfoMessage() {
    const roundMessage = document.querySelector('#round-message')
    roundMessage.classList.add('game__events--actived')
}


function checkPlayerMarkerWrong(){
    let alreadyMarkedWrong = false

    listOfPlayers.forEach(player => {
        if (player.id == PlayerId) {
            if (player.answerWrong == true){
                alreadyMarkedWrong =  true
            }
        }
    })

    return alreadyMarkedWrong
}


function clickInTheOddEmoji() {
    if(!checkPlayerMarkerWrong()){
        stopTime = true
        removeMatchTimer()
        

        giveThePoints()
        showTheOddEmoji()
        setInfoMessageWhoWin()
        showInfoMessage()
        callNewRoundTimer()
    
        renderListOfPlayers()
    }
}


var clickInTheWrongEmoji = function (){
    if(!checkPlayerMarkerWrong()){
        markAsWrongAnswer()
        setWrongAnswerIcon()
    }
   
}

function markAsWrongAnswer(){
    
    listOfPlayers = listOfPlayers.map(player => {
        if (player.id == PlayerId) {
            player.answerWrong = true
        }
        return player
    })
}

function setWrongAnswerIcon(){
    const playerListById = document.querySelector(`[data-id=${PlayerId}]`)
    playerListById.innerHTML += ` <i class="fa-solid fa-circle-xmark"></i>`
    playerListById.classList.add('player__name--wrong')
}

function giveThePoints() {
    listOfPlayers = listOfPlayers.map(player => {
        if (player.id == PlayerId) {
            player.score += 10
            player.answerRight = true
        }

        return player
    })
}

function setInfoMessageWhoWin() {
    const messageText = document.querySelector('#correct-text')
    messageText.classList.remove('events__message--wrong')
    messageText.textContent = "Acertou"

    const textPlayerUserNameWin = document.querySelector('.events__message__player__name')
    const playerWhoWin = listOfPlayers.filter((player) => player.answerRight)

    if (playerWhoWin.length > 0) {
        playerWhoWin.forEach(player => {
            if (player.answerRight) {
                textPlayerUserNameWin.textContent = player.name
            }
        })
    }

}

function setInfoMessageNoOneWon() {
    const messageText = document.querySelector('#correct-text')
    messageText.classList.add('events__message--wrong')
    messageText.textContent = "Ninguém Acertou!"

    const textPlayerUserNameWin = document.querySelector('.events__message__player__name')
    textPlayerUserNameWin.textContent = ''
}


function callNewRoundTimer() {
    waitingForNewRound = true
    setEventListenerInEmojiDivs()
    setTimeout(()=>{
        stopTime = false
    },1000)
    
    const newRoundTime = document.querySelector('#wait-timer-count')
    newRoundTime.style.width = "100%"

    const timerConfigs = {
        timerHtmlElement: newRoundTime,
        type: "newRoundTime"
    }

    turnTimerCount(5, timerConfigs)
}



function removeInfoMessage() {
    const roundMessage = document.querySelector('#round-message')
    roundMessage.classList.remove('game__events--actived')
}




function resetGameEventBoard() {
    const gameBoard = document.querySelector('.game__events__board')
    gameBoard.innerHTML = ''
}

function startNewRound() {
    gameStarted = null
    startTheGame()
}

function roundCount(maxRound){
    const roundCountText = document.querySelector('#round-count-text')
    if(currentRound >= 0 && currentRound < maxRound ){
        currentRound += 1
        roundCountText.textContent = `RODADA ${currentRound}/${maxRound}`
    }else if(currentRound == maxRound){
        roundCountText.textContent = `PARTIDA TERMINOU!`
    }
}
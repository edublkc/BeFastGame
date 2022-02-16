import {getUserNameInInput} from "./login.js"

const startGameTeste = document.querySelector('#start-test')

var gameStarted = null
var randomNumber = 0
var stopTime = false

var listOfPlayers = []


export function getListOfPlayers(myGame) {
    const roomPlayersList = document.querySelector('#room-players')
    listOfPlayers = Object.values(myGame.players)

    renderListOfPlayers()
    console.log(listOfPlayers)
}

function renderListOfPlayers(){
    const roomPlayersList = document.querySelector('#room-players')

    roomPlayersList.innerHTML = ''

    listOfPlayers.forEach(player => {
        roomPlayersList.innerHTML += `
    <ul>
        <li>
            <span class="player__name">${player.name}</span>
            <span class="player__score">Pontos: <span class="player__score__number">${player.score}</span></span>
        </li>
    </ul>
    `
    })
}




startGameTeste.addEventListener('click', () => {
    if (gameStarted == null) {
        const matchTimerCount = document.querySelector('#round-timer-count')
        showMatchTime()
        createDivsForTheBoard(276)  //MAX DE DIVS CRIADAS: 276
        turnTimerCount(15,{
            timerHtmlElement: matchTimerCount,
            type: "matchTime"
        })
        gameStarted = true
    }
})

export function startTheGame() {
    if (gameStarted == null) {
        const matchTimerCount = document.querySelector('#round-timer-count')
        showMatchTime()
        createDivsForTheBoard(276)  //MAX DE DIVS CRIADAS: 276
        turnTimerCount(15,{
            timerHtmlElement: matchTimerCount,
            type: "matchTime"
        })
        gameStarted = true
    }
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
    aChosenDiv.onclick = () => {
        clickInTheOddEmoji()
    }

    showTheGameBoard()
}



function showTheGameBoard() {
    const board = document.querySelector('.game__events__board')
    setTimeout(() => {
        board.style.opacity = "1"
    }, 500);
}

function turnTimerCount(maxTime,settings, seconds = 0) {
    //const timeCounter = document.querySelector('.timer_count')
    
    const {timerHtmlElement,type} = settings

    let percentageToDecreaseInASecond = 1 * 100 / maxTime
    let maxWidth = timerHtmlElement.clientWidth
    intervalCounter({
        timerHtmlElement,
        percentageToDecreaseInASecond,
        maxWidth,
        seconds,
        maxTime,
        type
    })

}

const intervalCounter = function (timerConfigs) {

    let { timerHtmlElement, percentageToDecreaseInASecond, maxWidth, seconds, maxTime, type } = timerConfigs


    let timer = setInterval(() => {
        verifyStopTime()

        seconds++

        let currentWidth = timerHtmlElement.clientWidth
        let completedWidthPercent = currentWidth * 100 / maxWidth

        timerHtmlElement.style.width = `${completedWidthPercent - percentageToDecreaseInASecond}%`

        if (seconds == maxTime) {
            if(type == "matchTime"){
                matchTimeOver()
            }else if(type == "newRoundTime"){
                newRoundTimeOver()
            }
            
            timerHtmlElement.style.height = '0px';
            clearInterval(timer)
        }

        console.log(seconds)

    }, 1000)

    function verifyStopTime(){
        if (stopTime) {
            clearInterval(timer)
        }
    }

}

function showMatchTime(){
    const matchTime = document.querySelector('#round-time')
    matchTime.classList.add('game__events--actived')
}

function matchTimeOver(){
    removeTimer()
    setMessageWhoWinOrNo()
    showTheOddEmoji()
}

function newRoundTimeOver(){
    stopTime = true
    removeNewRoundTimer()
    removeInfoMessage()
    resetGameEventBoard()
    startTheGame()
}


function showTheOddEmoji() {
    const allDivs = document.querySelectorAll('[data-odd]')
    allDivs.forEach((div, index) => {
        if (index != randomNumber) {
            div.style.opacity = '0.3'
        }
    })

}



function clickInTheOddEmoji() {
    stopTime = true
    let currentUserName = getUserNameInInput()

    listOfPlayers = listOfPlayers.map(player =>{
        if(player.name == currentUserName){
         player.score +=10
         player.answerRight = true
        }

        return player
    })

   removeTimer()
   showTheOddEmoji()
   setMessageWhoWinOrNo()
   renderListOfPlayers()
}

function removeTimer(){
    const timer = document.querySelector('#round-time')
    
    setTimeout(()=>{
        timer.classList.remove('game__events--actived')
        showInfoMessage()
        callNewRoundTimer()
    },2000)
    
}

function removeNewRoundTimer(){
    const timer = document.querySelector('#wait-time')
    
    setTimeout(()=>{
        timer.classList.remove('game__events--actived')
    },2000)
}

function showInfoMessage(){
    const roundMessage = document.querySelector('#round-message')
    roundMessage.classList.add('game__events--actived')
}

function removeInfoMessage(){
    const roundMessage = document.querySelector('#round-message')
    roundMessage.classList.remove('game__events--actived')
}

function setMessageWhoWinOrNo(){
    const textPlayerUserNameWin = document.querySelector('.events__message__player__name')
    const textMessage = document.querySelector('#win-text .events__message__text')
    const playerWhoWin = listOfPlayers.filter((player) => player.answerRight)


    if(playerWhoWin.length > 0){
        playerWhoWin.forEach(player =>{
            if(player.answerRight){
                textPlayerUserNameWin.textContent = player.name
            }
        })
    }else{
        textPlayerUserNameWin.classList.add('events__message--wrong')
        textPlayerUserNameWin.textContent = "Ninguém"
        textMessage.classList.add('events__message--wrong')
    }
    
}

function callNewRoundTimer(){
    stopTime = false
    const newRoundTime = document.querySelector('#wait-timer-count')
    turnTimerCount(9,{
        timerHtmlElement: newRoundTime,
        type: "newRoundTime"
    })
}

function resetGameEventBoard(){
    gameStarted = null
    const gameBoard = document.querySelector('.game__events__board')
    gameBoard.innerHTML = ''
}
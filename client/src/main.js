import {setUserNameInInput, getUserNameInInput} from "./login.js"
import {getListOfPlayers, getCurrentPlayerId} from "./game.js"

const socket = io()

const playButton = document.querySelector('#play-button')

socket.on('currentUserConnected', (username) => {
    setUserNameInInput(username)
})

socket.on('playersRefresh',(values)=>{
    getListOfPlayers(values.game)
    getCurrentPlayerId(values.currentPlayerId)
})

playButton.addEventListener('click',()=>{
    socket.emit('setUserNameCurrentPlayer',getUserNameInInput())
    socket.emit('prepareTheGame')
})




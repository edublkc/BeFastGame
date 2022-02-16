/*import express from 'express';
import path from 'path';
import http from 'http';
import {Server} from 'socket.io';
*/



const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io')



const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(path.join(__dirname, '..', '/client/dist/')))



const game = {
    players: {

    }
}


io.on('connection', (socket) => {
    console.log(`${socket.id} Conectado...`)

    const name = 'Player_' + socket.id.substr(0, 5)

    socket.emit('currentUserConnected', name)

    game.players[socket.id] = {
        name,
        score: 0,
        answerWrong: false,
        answerRight: false,
        id:socket.id
    }

    refreshPlayers(socket.id)

    socket.on('setUserNameCurrentPlayer',(UserNameCurrentPlayer)=>{
        game.players[socket.id].name = UserNameCurrentPlayer
        refreshPlayers(socket.id)
    })

    socket.on('prepareTheGame',()=>{
      
    })


    socket.on('disconnect', () => {
        delete game.players[socket.id]
        refreshPlayers(socket.id)
    })
    console.log(game)
})



const refreshPlayers = (currentPlayerId) =>{
    console.log('id do cara '+currentPlayerId)
    io.emit('playersRefresh', {game,currentPlayerId})
}


server.listen(3000);
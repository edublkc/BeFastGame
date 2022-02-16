const path = require('path');

module.exports = {
    entry: {
        main:'./client/src/main.js',
        room: './client/src/room.js',
        login: './client/src/login.js',
        game: './client/src/game.js'
    },
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'./client/dist/assets/js')
    },
    mode: "development"
    

}
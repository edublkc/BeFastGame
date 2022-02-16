export function Room(){
    return `
    <div class="game">
           
            <div class="game__room">

                <div class="game__left">

                    <div class="game__header">
                        <div class="game__header__logo">
                            <img src="assets/image/logo.png">
                        </div>
                    </div>

                    <div id="room-players" class="game__left__players scroll">
                    </div>
                </div>
    
                <div class="game__right">
                    <div class="game__header">
                        <button id="start-test" class="btn btn--red">Iniciar jogo</button>

                        <div class="game__envets__time">
                            <div class="timer">
                                <div class="timer_count">
    
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="game__events">
                        <div class="game__events__board">
                            
                        </div>
                    </div>

                    <div class="game__chat">
                        <div class="game__chat__messages scroll">
                            <ul>
                                <li>
                                    <span class="game__chat__name">Eduardo</span>
                                    <span class="game__chat__message">Olá mundo</span>
                                </li>
                            </ul>
                        </div>
                        <div class="game__chat__input">
                            <input type="text" placeholder="Mande uma mensagem para a sala...">
                            <i class="fas fa-paper-plane"></i>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    `
}
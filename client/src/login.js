const playButton = document.querySelector('#play-button')
const roomDiv = document.querySelector('.game')
const screenHome = document.querySelector('.screen-home')

let randomUserName = ''

playButton.addEventListener('click', () => {
    roomDiv.classList.add('game--actived')
    screenHome.classList.remove('screen-home--actived')
})

function checkIfHasAName(){
    const userNameInput = document.querySelector('#nick-input')

    let inputValue = userNameInput.value.trim()

    if(inputValue == ''){
        return randomUserName
    }
    
    return inputValue
}

export function setUserNameInInput(userName) {
    const userNameInput = document.querySelector('#nick-input')
    randomUserName = userName
    userNameInput.value = randomUserName
}

export function getUserNameInInput(){
    return checkIfHasAName()
}





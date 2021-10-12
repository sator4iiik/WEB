const startBtn = document.querySelector('#start')
const screen = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
let time = 0


startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screen[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        startGame()
    }
})

function startGame() {
    screens[1].classList.add('up')
    timeEl.innerHTML = `00:${time}`
}

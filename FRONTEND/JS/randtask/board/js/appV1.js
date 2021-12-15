const board = document.querySelector('#board')
const colors = ['#ffd6e7', 'red', '#d6e4ff', '#bae7ff', '#b5f5ec',
    '#d9f7be', 'white', '#f4ffb8', '#f4ffb8', '#fff1b8', '#ffe7ba', '#ffd8bf',
    '#ffccc7', 'white']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
    setColor(square))

    square.addEventListener('mouseleave', () =>
    removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
    // const index = Math.floor(Math.random() * colors.length)
    // return colors[index]
}

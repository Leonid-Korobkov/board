const board = document.querySelector('#board')
const SQUARE_NUMBERS = 700
const colors = ['#ADFF2F', '#00FF00', '#00FA9A', '#00FFFF', '#808000', '#7FFFD4', '#1E90FF', '#191970', '#800080', '#FF00FF', '#FF0000', '#F08080 ', '#FF1493', '#C71585', '#FF7F50', '#FF4500', '#FFFF00 ', '#FFD700', '#F0E68C', '#FF00FF', '#6A5ACD ', '#FFF8DC', '#800000']

for (let i = 0; i < SQUARE_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(el) {
    const color = getRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d';
    el.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
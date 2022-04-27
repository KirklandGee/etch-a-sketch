const gridArea = document.querySelector('.grid')
const gridSizeSelector = document.querySelector('.slider')
const mainContainer = document.querySelector(".grid")

function createHorizontalGrid (numOfSquares) {
    for (i=0; i<numOfSquares; i++) {
        const square = document.createElement("div")
        square.className = 'grid-square'
        gridArea.appendChild(square)
    }
}

function createFullGrid (numOfSquares) {
    mainContainer.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`
    mainContainer.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`
    for (i=0; i<(numOfSquares); i++) {
        createHorizontalGrid(numOfSquares*numOfSquares)
    }
    colorSquares()
}


function colorSquares () {
const gridSquares = document.querySelectorAll('.grid-square')
    gridSquares.forEach(function(element) {
        element.className = ''
        element.addEventListener('mouseover', () => {
            element.className = "black-square"
            console.log('clicked')
        })
    })
}

function resetGrid () {
    const resetButton = document.querySelector('.reset')
    resetButton.addEventListener('click', () => {
        let squareNumber = prompt('How many squares would you like in your grid?')
        mainContainer.innerHTML = ''
        //Reset squares in grid
        createFullGrid(squareNumber)
    })
}

const slider = document.querySelector('#myRange')
slider.addEventListener('mouseup', () => {
    let squareNumber = slider.value
    mainContainer.innerHTML = ''
    createFullGrid(squareNumber)
    document.querySelector('#grid-size-display').textContent = `${squareNumber} by ${squareNumber}`
})
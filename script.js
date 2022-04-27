const gridArea = document.querySelector('.main')
const gridSizeSelector = document.querySelector('.slideContainer')


// gridSizeSelector.addEventListener('mouseup', () => {
//     let squareNumber = gridSizeSelector.value
//     console.log(squareNumber)
// })

function createHorizontalGrid (numOfSquares) {
    for (i=0; i<numOfSquares; i++) {
        const square = document.createElement("div")
        square.className = 'grid-square'
        gridArea.appendChild(square)
    }
}

function createFullGrid (numOfSquares) {
    const mainContainer = document.querySelector(".main")
    mainContainer.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`
    mainContainer.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`
    for (i=0; i<(numOfSquares); i++) {
        createHorizontalGrid(numOfSquares*numOfSquares)
    }
    
}
createFullGrid(16)
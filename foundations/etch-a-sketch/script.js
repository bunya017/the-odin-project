let ACTION = 'draw'

function paint (el) {
  if (ACTION === 'draw') {
    el.style.backgroundColor = document.getElementById('colorPicker').value
   } else if (ACTION === 'erase') {
    el.style.backgroundColor = ''
   }
}

function erase () {
  ACTION = 'erase'
}

function draw () {
  ACTION = 'draw'
}

function drawSquares (num) {
  let spaceDiv = document.getElementById('draw-space')
  spaceDiv.innerHTML = ''
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let squareDiv = document.createElement('div')
      squareDiv.classList.add('square')
      squareDiv.style.height = `${480 / num}px`
      squareDiv.style.width = `${480 / num}px`
      squareDiv.onmousemove = function () {
        paint(this)
      }
      spaceDiv.appendChild(squareDiv)
    }
  }  
}

function init () {
  document.getElementById('colorPicker').value = '#fff'
  drawSquares(32)
}

function getSquareNum () {
  const num = Number(prompt('Enter number of squares (100 max):'))
  if (num <= 100) {
    drawSquares(num)
  }
}
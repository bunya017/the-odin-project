let DISPLAY = ''
function add (num1, num2) {
  return num1 + num2
}

function subtract (num1, num2) {
  return num1 - num2
}

function multiply (num1, num2) {
  return num1 * num2
}

function divide (num1, num2) {
  let division = num1 / num2
  return (division == 'Infinity') ? 'Hehehe... SIUUU!!!' : division
}

function addToDisplay (num) {
  if ((num === '.') && (DISPLAY.indexOf('.') === -1)) {
    if (DISPLAY.length === 0) {
      DISPLAY += `0${num}`
    } else {
      DISPLAY += `${num}`
    }
  } else if (num !== '.') {
    DISPLAY += `${num}`
  }
  document.getElementById('display').innerText = DISPLAY
}

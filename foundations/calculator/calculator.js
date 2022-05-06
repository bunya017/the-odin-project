let DISPLAY = ''
let NUM1 = null
let OPERATOR = ''

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

function clearDisplay () {
  DISPLAY = ''
  NUM1 = null
  OPERATOR = ''
  document.getElementById('display').innerText = DISPLAY
}

function runOperation (operator, num1, num2) {
  let result = ''

  if (`${operator}` === '+') {
    result = add(num1, num2)
  } else if (`${operator}` === '-') {
    result = subtract(num1, num2)
  } else if (`${operator}` === '*') {
    result = multiply(num1, num2)
  } else if (`${operator}` === '/') {
    result = divide(num1, num2)
  }

  return (result === '') ? '' : result
}

function setOperator (operator) {
  if ((DISPLAY.length > 0) && (NUM1 === null)) {
    NUM1 = Number(DISPLAY)
    OPERATOR = operator
    DISPLAY = ''
  } else if ((DISPLAY.length > 0) && (NUM1 !== null)) {
    NUM1 = runOperation(OPERATOR, NUM1, Number(DISPLAY))
    OPERATOR = operator
    DISPLAY = ''
    document.getElementById('display').innerText = NUM1
  }
}

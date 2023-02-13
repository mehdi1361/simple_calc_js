const defaultValue = 0;
let currentValue = defaultValue

logs = []

function writeToLog(prvValue, usrInput, currentValue, operator) {
  const log = {
    prvValue:prvValue,
    usrInput: usrInput,
    currentValue: currentValue,
    operator:operator
  }
  logs.push(log)
}

function getUserInput() {
  return  parseInt(usrInput.value)
}
function calc(operator) {
  const tempValue = currentValue;
  userInput = getUserInput();
  switch (operator) {
    case "Add":
      currentValue += userInput;
      break;

    case "Subtract":
      currentValue -= userInput;
      break;

    case "Multiply":
      currentValue *= userInput;
      break;

    case "Divide":
      currentValue /= userInput;
      break;

    default:
      throw new Error("operator not found")
  }
  outputResult(currentValue, `${tempValue} ${operator} ${userInput}`);
}

function add() {
  calc("Add");
}

function sub() {
  calc("Subtract");
}
function mul() {
  calc("Multiply");
}
function div() {
  calc("Divide");
}
addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', sub)
multiplyBtn.addEventListener('click', mul)
divideBtn.addEventListener('click', div)

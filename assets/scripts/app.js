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
  logs.push(log);
  writeLogOnPage(log);
}

function getUserInput() {
  return  parseInt(usrInput.value)
}
function calc(operator) {
  const tempValue = currentValue;
  userInput = getUserInput();
  switch (operator) {
    case "+":
      currentValue += userInput;
      break;

    case "-":
      currentValue -= userInput;
      break;

    case "*":
      currentValue *= userInput;
      break;

    case "/":
      currentValue /= userInput;
      break;

    default:
      throw new Error("operator not found")
  }
  outputResult(currentValue, `${tempValue} ${operator} ${userInput}`);
  writeToLog(tempValue, userInput, currentValue, operator)
}

addBtn.addEventListener('click', ()=>calc("+"))
subtractBtn.addEventListener('click', () => calc("-"))
multiplyBtn.addEventListener('click', () => calc("*"))
divideBtn.addEventListener('click', () => calc("/"))

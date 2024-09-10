const defaultValue = 0;
let currentValue = defaultValue

logs = []

const writeToLog = (prvValue, usrInput, currentValue, operator) => {
  const log = {
    prvValue:prvValue,
    usrInput: usrInput,
    currentValue: currentValue,
    operator:operator
  };
  logs.push(log);
  writeLogOnPage(log);
}

const getUserInput = () => {
  return  parseInt(usrInput.value)
};

const calc = operator => {
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

addBtn.addEventListener('click', calc.bind(this, "+"));
subtractBtn.addEventListener('click', calc.bind(this, "-"));
multiplyBtn.addEventListener('click', calc.bind(this, "*"));
divideBtn.addEventListener('click', calc.bind(this, "/"));

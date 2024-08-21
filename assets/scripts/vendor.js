const usrInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

const logOutput = document.getElementById('log-section')
function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

const writeLogOnPage = (logObj) => {
  logOutput.innerHTML += `<li>${logObj.prvValue} ${logObj.operator} ${logObj.usrInput}=${logObj.currentValue}</li>`
  
}
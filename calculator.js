console.log("its time to calculate!!!")

let add = function(a, b) {
    return (a + b);
};

let subtract = function(a, b) {
    return (a - b);
};

let multiply = function(a, b) {
    return (a * b)
};

let divide = function(a, b) {
    return (a / b)
};

function operate(a, b, operator) {
    switch(operator) {
        case '+':
           return add(a, b);
    
        case '-':
          return subtract(a, b);
           
        case '*':
           return multiply(a, b);
            
        case '/':
          return divide(a, b);       

    };

};

displayText = document.querySelector('#display-text')
displayText.textContent = "";


const numberButton = document.querySelectorAll('.number-button')
numberButton.forEach((button, index) => button.textContent = index + 1);


operatorSymbols = ['+', "-", "*", "/"]
const operatorButtons = document.querySelectorAll('.operator-button')
operatorButtons.forEach((button, index) => button.textContent = operatorSymbols[index]);

equalButton = document.querySelector('#equal-button');
equalButton.textContent = '=';

clearButton = document.querySelector('#clear-button');
clearButton.textContent = "clear";


function numbersOnDisplay(event) {
   displayText.textContent = event.target.id
}

numberButton.forEach((button) => button.addEventListener("click", numbersOnDisplay));



 

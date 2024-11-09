console.log("its time to calculate!!!")

let add = function(a, b) {
    displayText.textContent = (a + b);
};

let subtract = function(a, b) {
    displayText.textContent = (a - b);
};

let multiply = function(a, b) {
    displayText.textContent = (a * b)
};

let divide = function(a, b) {
    displayText.textContent = (a / b)
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




const numberButton = document.querySelectorAll('.number-button')
numberButton.forEach((button, index) => {
    if (index <= 8) { 
        button.textContent = index + 1
    }
});


operatorSymbols = ['+', "-", "*", "/"]
const operatorButtons = document.querySelectorAll('.operator-button')
operatorButtons.forEach((button, index) => button.textContent = operatorSymbols[index]);

equalButton = document.querySelector('#equal-button');
equalButton.textContent = '=';

clearButton = document.querySelector('#clear-button');
clearButton.textContent = "clear";

let operationDone = false;

function numDisplay(event) {
        if (operationDone === true) {
            displayText.textContent = "";
            operationDone = false;
        }; 
        displayText.textContent += event.target.id;
        firstNumber = displayText.textContent;
};

numberButton.forEach((button) => button.addEventListener("click", numDisplay));



function operatorDisplay(event) {
    if (displayText.textContent === "") {
        alert("choose a number") 
    } else if (event.target.textContent === "=") {   
        return;  
    } else {
        displayText.textContent += ` ${event.target.textContent} `;
    }
};

operatorButtons.forEach((button) => button.addEventListener("click", operatorDisplay)); 



clearButton.addEventListener("click", function() { 
    displayText.textContent = "";
});

equalButton.addEventListener("click", function() {
    array = displayText.textContent.split(" ");
    operate(+array[0], +array[2], array[1]);
    operationDone = true;

    
    
    

});


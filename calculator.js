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

const decimalButton = document.querySelector('#decimal');



operationDone = false;



function numDisplay(event) {

    if (operationDone === true) {
        displayText.textContent = "";
        operationDone = false;
    }
   
        
        displayText.textContent += event.target.id;
        array = displayText.textContent.split(" ");
        firstNumber = displayText.textContent;
}
      



document.addEventListener("keydown", function(event) {

    array = displayText.textContent.split(" ");
    
    
    
    
    if (event.ctrlKey || event.metaKey || event.altKey) {
        return; 
    }

    if (event.key >= '0' && event.key <= '9') {
        if (operationDone === true) {
            displayText.textContent = "";
            operationDone = false;
        }
        displayText.textContent += event.key;

    } else if (event.key === '.') {
        
        
        if (operationDone === true) {
            displayText.textContent = "";
            operationDone = false;

        } 
        if (array.length === 1 && array[0].includes('.')) {
            event.preventDefault(); 
            return;
        }

        if (array.length === 3 && array[2].includes('.')) {
            event.preventDefault(); 
            return;
        }

       
        displayText.textContent += event.key;

        
        
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        operationDone = false;
        if (displayText.textContent === " ") {
            return;
        } else if (!displayText.textContent.endsWith(' ')) {
            displayText.textContent += ` ${event.key} `;   
        } 

    } else {
        event.preventDefault();
    }

    array = displayText.textContent.split(" ");
  

    if (array.length > 3) {
        displayText.textContent += ` ${event.target.textContent} `;
        array = displayText.textContent.split(" ");
        operate(+array[0], +array[2], array[1]);
        let result = round(displayText.textContent, 5)
        displayText.textContent = result;
        
        
        if (['+', '-', '*', '/'].includes(event.key))
           
        displayText.textContent += ` ${event.key} `;
        
    } 

});

numberButton.forEach((button) => button.addEventListener("click", numDisplay));



function operatorDisplay(event) {

    operationDone = false;
    if (operationDone === true) {
        displayText.textContent += ` ${event.target.textContent} `;
        operationDone = false;
    };

    if (displayText.textContent === "") {
        alert("choose a number") 
        displayText.textContent = "";
    } else if (event.target.textContent === "=") {   
        return;  
    } else {
        displayText.textContent += ` ${event.target.textContent} `;
        array = displayText.textContent.split(" ");
       
    } 
    

    

};

operatorButtons.forEach((button) => button.addEventListener("click", operatorDisplay)); 
 
operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
       
        if (array.length > 3) {
            calculate();
            displayText.textContent += ` ${event.target.textContent} `;
            operationDone = false;
        } 
    
    });
});


let zero = document.querySelector(".zeroButton");
zero.addEventListener("click", numDisplay);


decimalButton.addEventListener("click", function() {
    const array = displayText.textContent.split(" ");
    if (array.length === 1 && array[0].includes(".")) {
        return; 
    }
    if (array.length === 3 && array[2].includes(".")) {
        return;
    }
    displayText.textContent += ".";
});


clearButton.addEventListener("click", function() { 
    displayText.textContent = "";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculate();
    }
});

document.addEventListener("keydown", function(event) {
        if (event.key === "Backspace" && operationDone === false) {
                displayText.textContent = displayText.textContent.slice(0, -1)
        } else if (event.key === "Backspace" && operationDone === true) {
                displayText.textContent = "";     
        }
    });





function calculate() {
    operationDone = true;
    array = displayText.textContent.split(" ");
    operate(+array[0], +array[2], array[1]);
    let result = round(displayText.textContent, 5)
    displayText.textContent = result;
    
 
    
};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

equalButton.addEventListener("click", calculate);
    



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

    }

};

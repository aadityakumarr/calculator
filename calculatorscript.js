const numberBtns = document.querySelectorAll('[number-btn]');
const operationBtns = document.querySelectorAll('[operation-btn]');
const output = document.getElementById("output");

let fitstOperand = 0;
let secondOperand = 0;
let goFirstOperand = false;
let operation;
let calculated = false;

numberBtns.forEach(numberBtns =>
    numberBtns.addEventListener("click", () =>
        insertValue(numberBtns.value))
)

operationBtns.forEach(operationBtns =>
    operationBtns.addEventListener("click", () =>
    handleOperationBtnClick(operationBtns.value))
)


insertValue = (value) => {
    if(calculated) return;
    output.value +=value;
    if(!goFirstOperand){
        fitstOperand += value;
    } else {
        secondOperand += value;
    }
}

handleOperationBtnClick = (value) => {
    if(value == 'C'){
        clearValues();
    }

    if(!operation){
        if(!fitstOperand || value === '=') return;
        output.value += value;
        goFirstOperand = true;
        operation = value;
    } else {
        if(value === '='){
            doCalculus(operation);
        };
    }
}

clearValues = () => {
    output.value = '';
    fitstOperand = 0;
    secondOperand = 0;
    goFirstOperand = false;
    operation = null;
    calculated = false;
}

doCalculus = (value) => {
    fitstOperand = parseInt(fitstOperand);
    secondOperand = parseInt(secondOperand);
    switch(value){
        case '/':
            output.value = fitstOperand / secondOperand;
            calculated = true;
            break;
        case '*':
            output.value = fitstOperand * secondOperand;
            calculated = true;
            break;
        case '+':
            output.value = fitstOperand + secondOperand;
            calculated = true;
            break;
        case '-':
            output.value = fitstOperand - secondOperand;
            calculated = true;
            break;
        default: return;            
    }
}
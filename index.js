//Zachary Reynold
//JavaScript file for calculator program

const display = document.getElementsByName("display")[0];

justCalculated = false;

function appendToDisplay(value){

        if (justCalculated || display.value.startsWith('ERROR') || display.value.startsWith('undefined')){
            clearDisplay();
            justCalculated = false;
        }
        display.value += value
}

function appendOperatorToDisplay(value) {

    const currentValue = display.value.trim()

    if (currentValue === '' && ['+', '-', '*', '/'].includes(value)) {
        display.value = 'ERROR';
    } else {
        display.value += value;
        justCalculated = false;
    }
}

function decrement() {

    display.value = display.value.toString().slice(0,-1);
}

function clearDisplay(){

    display.value = '';
}

function calculate(){

    try{
        display.value = eval(display.value)
        justCalculated = true;
    }
catch(error){
    display.value = "ERROR";
}

}

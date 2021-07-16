let firstLine = 0;

function sumFunc(arg1, arg2) {
    const internalState = arg1 + arg2;

    // show state to debug
    //     console.log('internalState', internalState);

    return internalState;
}

/**
 * set border color to invalid (red)
 * @param {HTMLInputElement} inputElement 
 */
function setValidationStyle(inputElement, isValid) {
    if (isValid) {
        inputElement.style.borderColor = '';
    } else {
        inputElement.style.borderColor = 'red';
    }
}

/**
 * register changes for input element
 * @param {HTMLInputElement} inputElement 
 */
function registerInputChanges(inputElement) {
    inputElement.addEventListener('change', (event) => {
        console.log('input changed', event);
        const operation = document.getElementById('operation');
        const isValid = validateSecondInput(event.target.value, operation.value);
        setValidationStyle(event.target, isValid);
    });
}

/**
 * validate second input
 * @param {string} value 
 * @param {string} operation 
 * @returns {boolean} false for invalid, true for valid
 */
function validateSecondInput(value, operation) {
    if (!validateCalculatedInput(value)) {
        return false;
    }

    if (operation === 'divide' && (value == '0')) {
        return false;
    } else {
        return true;
    }
}

/**
 * validate value from input for calculation
 * @param {string} value number value as a string
 * @returns {boolean} true for valid, false for invalid
 */
function validateCalculatedInput(value) {
    const emptyValue = !value;
    const isNotANumber = isNaN(value);
    if (emptyValue || isNotANumber) {
        return false;
    } else {
        return true;
    }
}



let ble = sumFunc(1, 4);
let bla = sumFunc(22, 4);


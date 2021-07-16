const calculatorValidator = ((calculator) => {

  return {
    setValidationStyles,
    checkIfFieldIsValid
  }

  /**
   * check if input is correc
   * @param {HTMLInputElement} inputField 
   * @param {string} operation
   * @returns {boolean} return validation state
   */
  function checkIfFieldIsValid(inputField, operation) {
    if (operation === 'divide' && inputField.value == 0) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Set red border for invalid field element
   * @param {HTMLInputElement} inputFieldElement 
   * @param {Boolean} isValid 
   */
  function setValidationStyles(inputFieldElement, isValid) {
    if (isValid) {
      inputFieldElement.style.borderColor = '';
    } else {
      inputFieldElement.style.borderColor = 'red';
    }
  }

})(calculator);

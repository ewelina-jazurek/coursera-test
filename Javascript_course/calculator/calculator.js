(function () {


  const firstArgInput = document.getElementById('firstArg');
  const secondArgInput = document.getElementById('secondArg');
  const operation = document.getElementById('operation');

  registerCalculateClick();
  
  
  
  
  
  function registerCalculateClick() {
    const calculateBtn = document.getElementById('calculateBtn');
    
    calculateBtn.addEventListener('click', (clickEvent) => {
      switch(operation.value) {
        case 'plus': 
        setResult(parseInt(firstArgInput.value) + parseInt(secondArgInput.value));
        break;
        case 'minus': 
        setResult(parseInt(firstArgInput.value) - parseInt(secondArgInput.value));
        break;   
        case 'multiply': 
        setResult(parseInt(firstArgInput.value) * parseInt(secondArgInput.value));
        break;
        case 'divide': 
        setResult(parseInt(firstArgInput.value) / parseInt(secondArgInput.value));
        break;             
      }
      
    });
  }

  function setResult(result) {
    document.getElementById('result').innerHTML = result;
  }
  

  // todo: write program which calculate value 
  // base on input values on calculate btn click



})();
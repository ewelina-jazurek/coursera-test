
(function () {


  const firstArgInput = document.getElementById('firstArg');
  const secondArgInput = document.getElementById('secondArg');
  const operation = document.getElementById('operation');
  const result = sumCalculation(2, 3);

  registerCalculateClick();

  function registerCalculateClick() {
    const calculateBtn = document.getElementById('calculateBtn');


    calculateBtn.addEventListener('click', (clickEvent) => {

      const firstArg = parseInt(firstArgInput.value);
      const secondArg = parseInt(secondArgInput.value);

      let resultToDisplay;

      switch (operation.value) {


        case 'plus':
          resultToDisplay = sumCalculation(firstArg, secondArg);
          break;
        case 'minus':
          resultToDisplay = subtractCalculation(firstArg, secondArg);
          break;
        case 'multiply':
          resultToDisplay = multiplyCalculation(firstArg, secondArg);
          break;
        case 'divide':
          resultToDisplay = devideCalculation(firstArg, secondArg);
          break;
      }

      setResult(resultToDisplay);

    });
  }

  // switch color 
  function registerSwitchOperation() {
    document.getElementById('operation')
  }

  function setResult(result) {
    document.getElementById('result').innerHTML = result;
  }

  function sumCalculation(arg1, arg2) {
    return arg1 + arg2;
  }

  function subtractCalculation(arg1, arg2) {
    return arg1 - arg2;
  }

  function multiplyCalculation(arg1, arg2) {
    return arg1 * arg2;
  }

  function devideCalculation(arg1, arg2) {
    if (arg2 === 0) {
      alert('you can not divide by 0');
      return 0;
    } else {
      return arg1 / arg2;
    }
  }


  // ??????????
  // const selectElement = document.querySelector ('.color')
  // selectElement.addEventListener('switch', (event)  => {
  //   const result = document.querySelector('.result');
  // result. ????
  // });


// function addEventListener('switch', (event)  => {

//   const selectElement = document.querySelector ('operation.color')
//  if (querySelector === + {
//    color = yellow 
//  }


  // });

  

  // todo: write program which calculate value 
  // base on input values on calculate btn click



})();


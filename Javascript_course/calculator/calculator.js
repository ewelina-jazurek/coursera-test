
const firstArgInput = document.getElementById('firstArg');
const secondArgInput = document.getElementById('secondArg');
const operation = document.getElementById('operation');


registerCalculateClick();

// 2. function registerCalculateClick
function registerCalculateClick() {
  const calculateBtn = document.getElementById('calculateBtn');


  // 3. function clickEvent
  calculateBtn.addEventListener('click', (clickEvent) => {

    const firstArg = parseInt(firstArgInput.value);
    const secondArg = parseInt(secondArgInput.value);

    let resultToDisplay;

    // 4. function
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
        resultToDisplay = divideCalculation(firstArg, secondArg);
        break;
    }

    setResult(resultToDisplay);

  });
}

// 5. function
function registerSwitchOperation() {
  document.getElementById('operation')
}

// 6. function
function setResult(result) {
  document.getElementById('result').innerHTML = result;
}

// 7. function
function sumCalculation(arg1, arg2) {
  return arg1 + arg2;
}
// 8. function
function subtractCalculation(arg1, arg2) {
  return arg1 - arg2;
}
// 9. function
function multiplyCalculation(arg1, arg2) {
  return arg1 * arg2;
}

// 10. function
function divideCalculation(arg1, arg2) {
  if (arg2 === 0) {
    alert('you can not divide by 0');
    return 0;
  } else {
    return arg1 / arg2;
  }
}

// 11. function
// Calculator validation (if second argument is 0 and operation is division change background color to red and message that dividing by 0 is not allowed)
// function validateSecondArgForDivide(arg2) {
//   if (arg2 === 0 && divideCalculation) {
//     switch (color = 'red');
//     }  else {
//       switch (color = 'lightblue');
//       }
//     }

// ??????????????
// const divideSecondArg = document.getElementById.operation = divideCalculation(secondArgInput);

// function detectSecondArgInvalid() {
//   if (divideSecondArg === 0) {
//     secondArg.style.backgroundColor = 'red'
//   }
// }
// function changeColor(red)

// function markSecondArgvalid
// ????????????????



// 12. function - switch color :

const operationElement = document.getElementById('operation');
console.log(operationElement);

operationElement.addEventListener('change', (event) => {
  const selectedValue = event.target.value;

  switch (selectedValue) {
    case 'plus':
      changeColor('green');
      break;
    case 'minus':
      changeColor('orange');
      break;
    case 'multiply':
      changeColor('yellow');
      break;
    case 'divide':

      changeColor('lightblue');
      break;
  }
  console.log('change event');
});

// 13. function ?? change color 
function changeColor(colorName) {
  operationElement.style.backgroundColor = colorName;
}



  // const divide = document.getElementById.secondArg




// ???? 2nd option to switch colors : ???
//   const selectElement = document.querySelector ('operation.color')

//  document.addEventListener('change', (event)  => {

//    if (querySelector === + {
//      color = green
//    }

//    if (querySelector === - {
//     color = red
//   }

//   if (querySelector === * {
//     color = yellow 
//   }

//   if (querySelector === / {
//     color = lightblue
//   }






  // todo: write program which calculate value 
  // base on input values on calculate btn click



  // to switch colors : 
  // const selectElement = document.querySelector ('.color')
  // selectElement.addEventListener('switch', (event)  => {
  //   const result = document.querySelector('.result');
  // result. ????
  // });
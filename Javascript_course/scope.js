// tlumaczenie Grzeska z garem 

var gar = "pusty gar na rynku";


function addIngredient(ingredient) {
  var gar = 'gar w bloku';

  function replaceLocalIngredient(ingredient) {
    var gar = 'gar w chałupie';

    gar = 'in gar ' + ingredient;

    return ingredient;
  }

  replaceLocalIngredient(ingredient);
  console.log(gar);

}


addIngredient('marchewka');
console.log(gar);

addIngredient('seler');

console.log(gar);

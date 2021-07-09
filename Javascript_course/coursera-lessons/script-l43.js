var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    $stock: 110
}; 

console.log(facebook);

var string = "hello";
string += " world";
console.log(string + "!");

console.log((5 + 4) / 3);
console.log(undefined / 5);
function test1(a) {
    console.log(a / 5);
}
test1();

var x = 4, y = 4;
if (x == y) {
    console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
    console.log("x='4' is equal to y=4");
}

if (x === y) {
    console.log("strict: x='4' is equal to y=4");
}
else {
    console.log("strict: x='4' is NOT equal to y=4");
}

var sum = 0;
for (var i = 0; i < 10; i++) {
    console.log(i);
    sum = sum + 1;
}
console.log("sum of 0 through 9 is: " + sum);


function orderChickenWith(sideDish) {
    sideDish = sideDish || "whatever!";
    console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
 
console.log(company);
console.log("Company CEO name is: "
+ company.ceo.firstName);

console.log(company ["name"]);
company["stock of company"] = 110;

console.log("Stock price is: " + company["stock of company"]);

function multiply(x, y) {
    return x * y;
}
console.log(multiply(5, 3)); 

multiply.version = "v.1.0.0";
console.log(multiply.version);

function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier = x;
    };

    return myFunc;
}
 
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update");
console.log(a);
console.log(b);

function changePrimitive(primeValue) {
    console.log("in changePrimitive...");
    console.log("before:");
    console.log(primeValue);

    primeValue = 5;
    console.log("after:");
    console.log(primeValue);
}

var value = 7;
changePrimitive(value);
console.log("after changePrimive, orig value:")
console.log(value);

function test() {
    console.log(this);
    this.myName = "Ewelina";
}
test();
console.log(window.myName); 

// function constructors 
function Circle(radius) {
    // console.log(this);
    this.radius = radius;
}
Circle.prototype.getArea =
    function () {
        return Math.PI * Math.pow(this.radius, 2);
    }

var myCircle = new Circle(10);
console.log(myCircle.getArea);

var myOtherCicle = new Circle(20);
console.log(myOtherCicle);


// object literals ans "this"
var literalCircle = {
    radius: 10,

    getArea: function () {
        var self = this;
        console.log(this);

        var increaseRadius = function () {
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);

        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());


// Arrays 
var array = new Array();
array[0] = "Ewelina";
array[1] = 2;
array[2] = function (name) {
    console.log("hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array); 
console.log(array[1]);
array[2]("Ewelina");
array[2](array[0]);
console.log(array[3].course);


// short hand array creation 
var names = ["John", "Joe", "Bill"];
// console.log(names);

for (var i = 0; i < names.length; i++) {
    console.log("hello " + names[i]);
}

//  index ????
names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
    console.log("hello " + names[i]);
}


var names2 = ["John", "Joe", "Bill"];

var myObj = {
    name: "Joe",
    course: "html/css/js",
    platform: "coursera"
};
for (var prop in myObj) {
    console.log(prop + ": " + myObj[prop]);
}

//  ???????
for (var name in names2) {
    console.log("hello " + names2[name]); 
}
// ????????



// closures 
function makeMultiplier (multiplier) {
    // var multiplier = 2;
    function b () {
        console.log("Multiplier is: " + multiplier);
    }
    b();


    return (
        function (x) {
            return multiplier * x;
        }     


    );
} 

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));


// Fake Namespaces ?????
var boy = "John";
function sayHi () {
    console.log("Hi " + boy);
}


// immediately invoked function expression 
// IIFE
(function () {
    console.log("Hello Coursera!");
})();

(function (name) {
    console.log("Hello " + name);
})("Coursera"); 
 
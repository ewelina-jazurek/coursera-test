var companies = [
    { name: "company 1", category: "finance", start: 1981, end: 2003 },
    { name: "company 2", category: "retail", start: 1992, end: 2008 },
    { name: "company 3", category: "auto", start: 1999, end: 2007 },
    { name: "company 4", category: "retail", start: 1989, end: 2010 },
    { name: "company 5", category: "technology", start: 2009, end: 2003 },
    { name: "company 6", category: "finance", start: 1987, end: 2010 },
    { name: "company 7", category: "auto", start: 1986, end: 1996 },
    { name: "company 8", category: "technology", start: 2011, end: 2016 },
    { name: "company 9", category: "retail", start: 1981, end: 1989 }

];

var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }


// forEach = the best way to loop data 

companies.forEach(function (company) {
    // console.log(company);
    console.log(company.name);
});


// FILTER 

// get 21 or older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// var canDrink= ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });

// = the same shorter 
var canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

// Filter retail companies 

var retailCompanies = companies.filter(function (company) {
    if (company.category === 'retail') {
        return true;
    }
});

// = the same shorter 
var retailCompanies = companies.filter(company =>
    company.category === 'retail');
console.log(retailCompanies);


//  get 80s companies

var eightiesCompanies = companies.filter(company =>
    (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);


// get companies that lasted 10 years or more 

var lastedTenYears = companies.filter(company =>
    (company.end - company.start >= 10));

console.log(lastedTenYears);


// MAP

// create array of company names 
var companyNames = companies.map(function (company) {
    return company.name;
});
console.log(companyNames);

var test = companies.map(function (company) {
    return 1;
});
console.log(test);

var testMap = companies.map(function (company) {
    return `${company.name} [${company.start} - ${company.end}]`;
});

// the same - shorter method 
var testMap = companies.map(company => `${company.name} 
  [${company.start} - ${company.end}]`);

console.log(testMap);


var agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

var agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);

var ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log(ageMap);


// SORT

// sort companies by start year 
var sortedCompanies = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedCompanies);

var sortedCompanies = companies.sort((a, b) => (a.start > b.start));
console.log(sortedCompanies);


// sort age 
var sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);


// REDUCE 

// 1. option
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// 2. option = the same in other way: 
// var ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);

// 3. option = the same in other way (the shortest): 
var ageSum = ages.reduce((total, age) =>
    total + age, 0);

console.log(ageSum);


// get total years for all companies 
// 1. option
// var totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);

// 2. option = the same in other way (the shortest): 
var totalYears = companies.reduce((total, company) =>
   total + (company.end - company.start), 0);

console.log(totalYears);


// combine methods 

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b, 0);

console.log(combined);


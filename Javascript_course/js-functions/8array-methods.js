var items = [
    {name: 'bike', price: 100},
    {name: 'tv', price: 200},
    {name: 'album', price: 10},
    {name: 'book', price: 5},
    {name: 'phone', price: 500},
    {name: 'computer', price: 1000},
    {name: 'keyboard', price: 25}

]

//  1. FILTER 
var filteredItems = items.filter((item) => {
    return item.price
    <= 100
})
console.log(filteredItems)


// 2. MAP 
const itemNames = items.map((item) => {
    return item.name 
})

console.log(itemNames)

const itemPrice = items.map((item) => {
    return item.price 
})

console.log(itemPrice)


// 3. FIND 
const foundItem = items.find((item) => {
    return item.name === 'book' 
})

console.log(foundItem)


const findItem = items.find((item) => {
    return item.name === 'album' 
})

console.log(findItem)


// 4. forEach 

items.forEach((item) => {
    console.log(item.name)
    console.log(item.price)  
})


// 5. SOME 
var hasInexpensiveItems = items.some((item) => {
   return item.price <= 100
})
console.log(hasInexpensiveItems)


// 6. EVERY 

var hasInexpensiveItems = items.every((item) => {
    return item.price <= 100
 })
 console.log(hasInexpensiveItems)


//  7. REDUCE

var total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(total)

// 8. INCLUDES 

var items = [1, 2, 3, 4, 5]
var includesTwo= items.includes(2) 
var includesTwo= items.includes(7) 
   
console.log(includesTwo)    
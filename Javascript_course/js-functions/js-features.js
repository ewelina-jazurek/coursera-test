// NULLISH COALESCING brak łączenia ??

// function calculatePrice(price, taxes, description) {
//     taxes = taxes || 0.05
//     description = description || "default item"
//     var total = price * (1 + taxes)
//     console.log( `${description} with tax: $${total}`)
// }
// calculatePrice(100, 0.07, "my item")
// calculatePrice(100, 0, "my other item")
// calculatePrice(100, undefined, "")


// difference || vs ?? 
function calculatePrice(price, taxes, description) {
    taxes = taxes ?? 0.05
    description = description ?? "default item"
    var total = price * (1 + taxes)

    // STILING CONSOLE.LOG 
    console.log(
       `%c${description} with tax:%c $${total}`,
    "font-weight: bold; font-size: 1.5rem", ""
    )
}
calculatePrice(100, 0.07, "my item")
calculatePrice(100, 0, "my other item")
calculatePrice(100, undefined, "")


// optional chaining 

// var person = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 25,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

class person {
    constructor(name, address, hobbies) {
        this.name = name
        this.address = address
        this. hobbies = hobbies
    }

    print() {
        console.log(this)
    }
}

function printPersonStreet(person) {
    console.log(person.address.street)
}
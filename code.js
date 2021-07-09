// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users);

// Append the katas to this element:
const main = document.querySelector("main");

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

//kata 1 - filter
function isActive(users){
    return users.isActive === true
}
let areActive = users.filter(isActive)
printKata(1, areActive)

//kata 2 - map
let emails = users.map(function(user){
    return user.email
})
printKata(2, emails)

//kata 3 - some

let companies = users.some(function(user){
    return user.compay ="OVATION"
})
printKata(3, companies)

//kata 4
let ages = users.find(function(user){
    return user.age === 28
})
printKata(4, ages)

//kata 5 - find and filter
function over28(users) {
    return users.age > 28  
}
let over28Active = users.filter(isActive).find(over28)
printKata(5, over28Active)


//kata 6 filter and map
function showBal(users){
    return users.balance
}
function compName(users){
    return users.company  === "ZENCO"
}
let balComp = users.filter(compName).map(showBal)
printKata(6, balComp)

//Kata 7 
function allAges(users){
    return users.age
}
function fug(users){
    return users.tags.includes("fugiat")
}

let ageTag = users.filter(fug).map(allAges)
printKata(7, ageTag)


function balances(users){
    return users.balance
}

let sum = users.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
})

printKata(8, sum)

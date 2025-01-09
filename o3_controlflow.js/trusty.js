const userEmail = ""

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


const user2Email = {}

if (user2Email) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


const user3Email = 0

if (user3Email) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

const user4Email = '0'

if (user4Email) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
//=== this check equality with its type also
// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
 val2= null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

//nulish coalescing operator is diff from tertiary operator

console.log(val1,val2,val3,val4);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
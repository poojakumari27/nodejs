//immediately evoked function expression
(function time(){
    console.log("pooja is the best")
})();
//use it as arrow not as function

(()=>{
    console.log("pooja is the best")
})();

//this is used to eliminate the  glopal pollution
/*Why Use IIFEs?
Avoid Global Scope Pollution:

Variables and functions declared inside an IIFE are not accessible outside of it. This helps in avoiding global variable conflicts.

Private Variables and Methods:

IIFEs allow for the creation of private variables and methods that cannot be accessed from outside the function.

Isolation of Code:

By wrapping code in an IIFE, you can ensure it doesn't interfere with other code.

Example:
javascript
(function () {
    var privateVar = "I am a private variable";
    console.log(privateVar); // Output: I am a private variable
})();

console.log(privateVar); // ReferenceError: privateVar is not defined
IIFE with Parameters:
IIFEs can also accept parameters, allowing you to pass arguments to them when they are invoked.

Example with Parameters:
javascript
(function (name) {
    console.log("Hello, " + name + "!");
})("Alice");

// Output: Hello, Alice!
ES6 Arrow Function IIFE:
With ES6, you can also create an IIFE using arrow functions.

Example with Arrow Function:
javascript
(() => {
    console.log("This is an ES6 arrow function IIFE!");
})();

// Output: This is an ES6 arrow function IIFE!
Real-World Use Case:
IIFEs are commonly used in module patterns to create a scope for the module's variables and methods.

Example:
javascript
var myModule = (function () {
    var privateVar = "I am a private variable inside myModule";
    
    function privateFunction() {
        console.log(privateVar);
    }

    return {
        publicMethod: function () {
            privateFunction();
        }
    };
})();

myModule.publicMethod(); // Output: I am a private variable inside myModule
In this example, myModule exposes only the publicMethod, while keeping privateVar and privateFunction inaccessible from outside the module.
*/

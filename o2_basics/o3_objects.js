/* we have two methods to define objects
Object Literal Notation:
let person = {
  name: "John",
  age: 30,
  city: "New York"
};
CONSTRUCTORZ
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

let person1 = new Person("John", 30, "New York");
The spread operator (...) can be used to copy properties from one object to another:
let person = {
  name: "John",
  age: 30
};

let newPerson = { ...person, city: "New York" };
console.log(newPerson); // { name: "John", age: 30, city: "New York" }


 */
//THERE IS NO SINGLETON WHEN WE USE LITERALS TO MAKE OBJECT
//THERE IS SINGLETON WHEN WE USE  CONSTRUCTOR TO MAKE OBJECT


const identity = {
    name: "Pooja",
    "fullname": "pooja kumari", // this value can't be accessed with . so we use bracket notation []
    age: 9,
    location: "Amritsar"
};

console.log(Object.values(identity)); // Outputs: ["Pooja", "pooja kumari", 9, "Amritsar"]
console.log(Object.keys(identity));   // Outputs: ["name", "fullname", "age", "location"]
console.log(identity.name);           // Outputs: "Pooja"
console.log(identity["fullname"]);    // Outputs: "pooja kumari"
console.log(identity);                // Outputs: {name: "Pooja", fullname: "pooja kumari", age: 9, location: "Amritsar"}
//. Symbols are unique and immutable primitive values that can be used as identifiers for object properties. They are often used to avoid property name collisions in objects when working with multiple libraries or frameworks.
const mysymbol=Symbol ("key1")
const nam={
    name1:"ram",
[mysymbol]:'value'
}
console.log(nam[mysymbol])//but still it is not used as symbol 
//type is  string here 
// therefore we will use here []
console.log(typeof mysymbol)

nam.name1="hari"
console.log(nam.name1)
//Freezing an Object: You call Object.freeze() and pass the object you want to freeze as an argument.

//Preventing Modifications: After freezing, you cannot add new properties, delete existing properties, or modify the values of existing properties.

//Non-Extensible: The object becomes non-extensible, meaning you cannot add new properties to it//
//object.freeze(nam)
//it will prevent any modification in it
 identity.greeting=function() {
    console.log("hii this side");
 }
 console.log(identity.greeting) //it will show function is annoymous
 console.log(identity.greeting())//it will give the output as we ware are here using ()
 
 
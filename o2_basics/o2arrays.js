const name=["pooja","suhana","nave"]
const age=[1,2,3]
//name.push(age)//the problem is it is getting added in form of array as one vale 

//console.log(name)
//to overcome the above problem we are concating
console.log(name.concat(age))
//another waya of adding

const newvalue=[...name,...age]
console.log(newvalue)
//if we are having array in array
const deeparr = [1, 2, 3, [4, 5], 6, 8, [9, [6]]];
const newdeeparr = deeparr.flat(4);
console.log(newdeeparr);
// to check it is an array or not 
console.log(Array.isArray("pooja"))
console.log(Array.from("pooja"))
console.log(Array.from({name:"pooja"})) //it will show an empty
//The reason you're getting an empty array as output is 
// ecause Array.from() is designed to create arrays from
// array-like or iterable objects. 
// //The object {name: "pooja"} is neither array-like nor iterable, so Array.from() doesn't know how to convert it into an array.const iterable = new Set(['a', 'b', 'c']);

const arrayLike = {0: 'a', 1: 'b', length: 2};
const newArray = Array.from(arrayLike);
console.log(newArray); // Output: ['a', 'b']
const obj = {name: "pooja"};
const new1Array = Object.values(obj);
console.log(new1Array); // Output: ['pooja']
//Array.from() is used to create arrays from array-like or iterable objects.

//Array.of() is used to create arrays from a set of argument
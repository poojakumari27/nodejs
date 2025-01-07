const array=[1,2,3,4,5]
// shallow copy shares the same refrence point like heap
//deep copy doesnot sdhare the sdame refreance point like stack

console.log(array[2])
const myheroes=["ram","sham","dhani"]
//another eay to initialize array
const arr= new Array(1,2,3,4,5,6)
console.log(arr[3])
console.log(array.concat(arr))
console.log(array.push(6))
console.log(array)
/* array methods
arr.push(value)
arr.pop(value)
arr.unshift(value)    here value will get insert at 0 index
arr.shift() it will shift the array*/
arr.shift()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(0)
console.log(arr)
//to check that value is present in array or not we use include method
console.log(arr.includes(9))
console.log(arr.indexOf(9))//it will give -1 as it is not present in the  arr 

const newarrn=arr.join()
console.log(newarrn)
console.log(typeof newarrn)
//vale is same nut type is changed from number to string
//slice and spice 
console.log("a",arr)
const my1=arr.slice(1,3)
console.log(my1)
console.log("b",arr)
console.log("d",arr)
const my2=arr.splice(1,3) //last 3 index is also included here
console.log(my2)//here my original array is also changefdfd 
//now my new array is only the remaining elements
console.log("e",arr)
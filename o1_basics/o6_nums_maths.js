const score=100
const balance =new Number (100.456)
console.log(score)
console.log(balance)
console.log (balance.toString())
console.log (balance.toPrecision(2))



console.log (balance.toFixed(2))
const hund=10000
console.log(hund.toLocaleString())
var sdcore = [100, 50];
console.log(Math.min(...sdcore));
console.log(Math.max(...sdcore));

console.log(Math.floor(-4.567))
console.log(Math.ceil(-4.4774))

console.log(Math.asinh(-4))
console.log(Math.min(1,2,3,4,5))
console.log(Math.random())//values are on range of 0 to 1 
// if we want to make a dice we wand a range of 1 to 6
//to do that 
console.log((Math.random()*10)+1)
max=6
min=1

console.log(Math.floor(Math.random()*(max-min+1))+min)
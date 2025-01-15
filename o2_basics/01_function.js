 function add(n1,n2){//parameters
    sum=n1+n2
   return sum;
 }
 const Result= add(4,5)//arguments
 console.log("Result : ",Result)


 function loginuser(username){
    return `${username} just logged in `
 }
let result2=loginuser("pooja")
console.log("Result : ",result2)
//output is undefined when no argument is passes
// to pass multiple values with only one parameter we will use rest operation
function num(val1,val2,...num2){
    return num2;

}
console.log(num(23,34,56,6,6,4,3,3,3,32,3,4,5,6,7,3))
//val1=23
//val2=34
//num2=rest values

//using function with an object
const user={
    name:"pooja",
    age:4,
    city:"amritsar",


}
function identity(info){
    console.log(info.name,info.age,info.city)
}
identity(user)

const newarray=[1,2,3,4]
function indexvalue(getvalue){
    return getvalue[3];
}
console.log(indexvalue(newarray))
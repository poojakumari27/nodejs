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
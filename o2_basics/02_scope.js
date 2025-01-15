let a=2
let b=3//globally declared


if(true){
    let a=200;//inner parameters declared known as block parameters
    let b=4;
        c=5;
        console.log(a,b)
}
console.log(a,b)
console.log(c) //will get accessed outside the  function also because 
//the datatype is not used or if var data type is used still it will gat printed


function one(){
    const username="pooja"
    function two(){
        const app="vscode"
        console.log(username);//two can get the value

    } //console.log(app)//we cant get the value from inner 
    two()
}one()


console.log(addone(5))   // by writing the functyion like this we will get the error

function addone(num){
    return num+1;
}
  console.log(twoadd(6)) // we will not get the output as the function is written in terms of expression
  // const no= function name is the format
  //it will give error

 const no=function twoadd(num2){
    return num+4
}
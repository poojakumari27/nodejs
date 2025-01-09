//here we are creating one object and inside that we are using functiom
 // we cant take the value from outside the fuction any value without using this

 const object={
    user:"pooja",
    age:5,
    wel:function(){// printing the value which is in current context
        console.log(`${this.user},welcome to website`)
    console.log(this)//here context sontact is prev and current one
}
 }
object.wel()
// if we change the username or pass any other name of user
//it will print the new namw not that name which is in the object
object.user="sam"
object.wel()//sam name will get printed

console.log(this)//here current contaxt is empty


//normally this is not used used in function 
//it is mainlu used in object and inside it in functio


function Chai(){
    let name="pooja"
    console.log(this)//lot of things are there in this
    console.log(this.username)//udefined output ,only used in object

}

 const Chai3=()=>{
    let name="pooja"
    console.log(this)
    console.log(this.username)//here also udefined output ,only used in object

}

 Chai3()



 const twoadd=(n1,n2)=>( n1+n2)//implicit
 console.log(twoadd(2,4))
 const add=(n3,n4)=>({user:"pooja"})//to use object in terms of arrow
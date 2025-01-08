// using it as a singleton or as a constructor 
const tinder=new Object()
// we have created a empty string
tinder.id="123dcdsd"
tinder.name="pooja"
tinder.islogged=false
console.log(tinder)
const reg = {
    email: "jhjid",
    fullname: {
        userfullname: "hueu",
        age: 4,
        address: {
            street: "123 Main St",
            city: "Amritsar",
            state: "Punjab",
            country: "India"
        }
    },
    age: 5,
    preferences: {
        language: "English",
        theme: "dark",
        notifications: {
            email: true,
            sms: false
        }
    }
};

console.log(reg)
console.log(reg.fullname)
console.log(reg.fullname.address)
const obj1={1:"a",2:"d"}
const obj2={4:"a",5:"d"}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)
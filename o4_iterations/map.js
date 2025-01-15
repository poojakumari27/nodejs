const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//for in loop is used for object
//for of is not used for object 
for (const key in myObject) {
console.log(key)
    console.log(myObject[key]);

    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key)
   console.log(programming[key]);
}
//map is not iterable ,we will use of not in
 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")

 for (const key in map) {
     console.log(key);
     }
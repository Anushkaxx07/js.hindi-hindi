//object in js

let sym=Symbol("key1")
let det={
    //interpretted as "name"
    name:"Anushka",
    email:"anushka@0705",
    phone:"8467965177",
    [sym]:"key2"

}
console.log(det.email);
 console.log(typeof sym);

 //change the properties
det.email="ananya@gmail.com";
console.log(det);
// Object.freeze(det);
det.email="darshi@gmail.com";
console.log(det);

//function inside an object

det.greet= function(){
    console.log(`hello have a nice day ${this.name}`);
}

console.log(det.greet);
console.log(det.greet());
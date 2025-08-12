//method concat vs push
let arr=[2,3,4,5];
let arr2=[9,8,7,6];
arr.push(arr2);
console.log(arr);
let arr4=[7,8,9];
let arr3=arr2.concat(arr4);
console.log(arr3);

//spread use krte h bascially humlog

let arr5=[...arr2,...arr4];
console.log(arr5);

//flat in array multidim kko single dim me convert krta h

let name=["anu",["pari","tanu",["darhsi"]]];
let nname=name.flat(Infinity);
console.log(nname);

console.log(Array.isArray("Anushka"));
console.log(Array.from("Anushka"));
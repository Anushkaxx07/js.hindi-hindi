//object part 2
//singleton object create

let user=new Object();
user.id="anushka112";
user.password=12345678;
console.log(user);
let newuser={
    email:"xyz",
    fullname:{
        userfullname:{
            firstname:"Anushka",
            lastname:"Upadhyay"
        }
    }
}
console.log(newuser.fullname.userfullname.firstname);



//how to combine two objects
let obj1={
    1:"a",
    2:"b"
}
let obj2={
    3:"r",
    4:"k"
}
let obj3={
    5:"p",
    6:"q"
}
let obj4=Object.assign({},obj1,obj2,obj3);
console.log(obj4);

console.log(Object.keys(obj4));
console.log(Object.entries(obj4));
console.log(obj4.hasOwnProperty(5));
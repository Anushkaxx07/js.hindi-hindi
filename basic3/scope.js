//nested scoping
function tanya(){
    let icecream="tanya ki ice cream";
    function pari(){
        let chips="pari ka chips"
        console.log(`Pari leli ${icecream}`);
    }
    // console.log(`Tanya leli ${chips}`)
    pari();

}
tanya();

//closure: mtlb choti behen badi behen ka saman le skti pr badi behen choti behen ka saman nhi le skti 


//hoisting 

console.log(one(4));
function one(num){
    return num+1;
}



//this wont work becuse of hoisitng
// console.log(two(7));
// let two=function(num){
//     return num+2;
// }


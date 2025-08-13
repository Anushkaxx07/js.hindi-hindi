//function
function saysalam(){
    console.log("Salam Anushka mam sahab")
}
// saysalam();


//function with objects

function handelobj(obj){
    console.log(`Thank you for shopping with ${obj.store} and your total bill is ${obj.amount}...Visit Again :)`)
}
handelobj(ob={store:"AMAZON",
    amount:100000
});

//rest (new feature in ES6)

function calcartprice(...prices){
    return prices;
}
console.log(calcartprice(1000,2000,40000));


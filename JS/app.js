function greetUser(name){
    console.log("Hi!"+ name);
}
// running a function
greetUser("Mike");
greetUser("Lisa");
// function with a return statement
function giveFood(food){
    let foo=`${food} and ${food}`
    return foo//no code after return statement
}
let totalFood=giveFood("apples");
console.log(totalFood);//*apples and apples

let listOfNames=["Zach","John","kolbie"];
for (let i-=0; i<listOfNames.length; i++){
    greetUser(listOfNames[i]);
}
// FUNCTION EXPRESSION

let calculateArea=function (length,width){
    return length*width;
}
let area=calculateArea(5,10);
console.log("Area:",area);


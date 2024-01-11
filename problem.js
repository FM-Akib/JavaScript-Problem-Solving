//problem -- 01

// function foo(){
//     console.log("foo");
//     bar();
// }
// function bar(){
//     console.log("bar");
// }
// foo();

//problem--02

// function make_Avg(num1,num2,num3){
//     var sum =num1 +num2+num3;
//     var avg =sum/3;
//     return avg;
// }

// var average=make_Avg(10,20,30);
// console.log(average);


//problem--03

//var input = window.prompt('What is your Name?');

//problem--04
// function odd_even(num){
//     if(num%2==1){
//         console.log('Number is odd.')
//     }
//     else {
//         console.log('Number is Even.')
//     }
// }
// odd_even(500);

//problem--05
var signal='red';
switch(signal){
    case 'green':
        console.log('You are good to go.')
        break;
    case 'red':
        console.log("!!It's Dangerous..")
        break;
    case 'yellow':
        console.log("Stop Please.")
        break;
    default:
        console.log("Don't run while crossing road.")
}



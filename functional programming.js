// pure function 
function sqr(n){
    return n*n
}
console.log(sqr(3))

//first class function
//1
function add(a,b){
    return a + b
}
var b = add
console.log(b(2,3))
//2
function mul(a,b){
    return a * b
}
var ar=[]
ar.push(mul)
console.log('function initialize in array: '+ar[0](3,7))

//3
function sub(a,b){
    return a - b
}
var obj={
    x:10,
    y:20,
    z:sub

}
console.log('function initialize in object propertise: ')
console.log(obj.z(5,7))

//4
setTimeout(function() {
    console.log('function created in another function argument')
},100)

//high order function 
function Do(a,b){
    return (a/b)
}
function manipulate(a,b,fun){
    var c =a+b
    var d =a-b
    function multiply(){
        var m=fun(a,b)
        return c*d*m
    }
    return multiply
}
var multiply = manipulate(3,4,Do)
console.log(multiply())
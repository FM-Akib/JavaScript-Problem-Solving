var a=[3,45,6,7,8,8]

var sum = a.reduce(function(prev, cur) {
             return prev + cur
},100)
console.log(sum)


//implementation
function myReduce(arr, cb,acc){
for(var i=0; i<arr.length; i++){
    acc=cb(acc,arr[i])
}
return acc
}

var sum2 = myReduce(a,function(prev, cur){
    return prev + cur
},0)
console.log(sum2);

var min = myReduce(a,function(prev, cur){
    return Math.min(prev,cur)
},a[0])
console.log(min);

var max = myReduce(a,function(prev, cur){
    return Math.max(prev,cur)
},a[0])
console.log(max);

//practice problems
const nums=[1,2,3,4,5,95]
const total= nums.reduce((sum, cur)=>sum+cur,0);
console.log(total);

//using object

const people=[
    {id:1,name:'Akib',age:23},
    {id:2,name:'Shakib',age:24},
    {id:3,name:'Dhakib',age:44}
]
 const totalAges=people.reduce(function(sum, cur){
    return sum + cur.age
},0)
 console.log(totalAges);
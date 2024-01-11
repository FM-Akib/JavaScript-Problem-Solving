var a =[1,2,3,4,5,6]
var sqrArr=a.map(function(value){
    return value*value;
})
console.log(sqrArr)
console.log(a)


// function Map(arr,cb){
//     var newArr=[]
//     for(var i=0;i<arr.length;i++){
//         var temp=cb(arr[i],i,arr)
//         newArr.push(temp)
//     }
//     return newArr
// }
// var qb = Map(a,function(value){
//     return value*value*value;
// })
// console.log(qb)
// console.log(a)


const array=[1,3,5,7,9,11];
const evenArray=array.map(n=>n+1);
console.log(evenArray)
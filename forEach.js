var a=[70,79,30,40,50]

// a.forEach(function(value,index,arr) {
//       console.log(value,index,arr)    
// });

a.forEach(function(value,index,arr) {
     arr[index] = (value*value)    
});
console.log(a)

//Manually How actully forEach work through call back function.

// var b =[12,13,14,15,16]


// function forEach(arr,cb){
//     for(var i=0;i<arr.length;i++){
//         cb(arr[i],i,arr)
//     }
// }

// forEach(b,function(value,index,arr) {
//     console.log(value,index,arr)
// })
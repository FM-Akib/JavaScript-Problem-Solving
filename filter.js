var arr=[1,3,4,5,6]

var result=arr.filter(function(value){
 return value%2==0
})
console.log(result)


//implementation 
function myFilter(arr,cb){
    var newArr=[]
    for(var i=0;i<arr.length;i++){
        if(cb(arr[i],i,arr)){
            newArr.push(arr[i])
        }
    }
    return newArr
}
var result2=myFilter(arr,function(value){
return value>3
})
console.log(result2)


//assignment 
const array=[20,30,35,100,70,90];
const bigArray=array.filter(n=>n>50)
console.log(bigArray)
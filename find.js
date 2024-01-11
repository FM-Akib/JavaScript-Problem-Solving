var arr=[12,23,34,54,6]

var result=arr.find(function(val){
    return val==23
})
console.log(result)
console.log(arr.find(function(val){
    return val==12
}))

//implementation 
function myFind(arr,cb){
    for(var i=0;i<arr.length;i++){
        if(cb(arr[i]))return arr[i]
    }
}
var result2=myFind(arr,function(val){
    return val==5
})
console.log(result2)
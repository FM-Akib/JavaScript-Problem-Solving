var a=[2,3,34,54,6]

//return true false if every element hold this condition then return true else false

var res=a.every(function(value){
    return value%2
}) 
console.log(res)

//some : at least one element hold this condition then return true else return false

var res2 = a.some(function(value){
    return value%2
})
console.log(res2)
var a = [23,34,5,6,-6,123,0]

//a.sort()
//acending
a.sort(function(a, b) {
if(a>b) return 1
else if(a<b) return -1
else return 0
})


console.log(a)

//decending

a.sort(function(a, b) {
    if(a>b) return -1
    else if(a<b) return 1
    else return 0
})
console.log(a)


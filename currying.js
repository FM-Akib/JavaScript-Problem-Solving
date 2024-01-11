function add(a,b,c) {
    return a+b+c;
}

var res= add(2,3,4)
console.log(res)

//currying version

function currying(a){
   return function (b){
      return function (c){
         return a+b+c;
    }
   }
}
var res2= currying(5)(10)(5)
console.log(res2)
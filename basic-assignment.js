// function radianToDegree(radian){
//         return radian*57.2957795;
// }

// var radian=radianToDegree(1.3);
// console.log(radian);


// function isJavaScriptFile(s){
//     var k= s.length;
//       if(s[k-1]=='s'&&s[k-2]=='j'&&s[k-3]=='.'){
//         return true;
//       }
//       else return false;
// }

// var ans = isJavaScriptFile('akib.js');
// console.log(ans);


// function oilPrice(disel,petrol,octane) {
//   var dp=disel*114;
//   var pp=petrol*130;
//   var op = octane *135;
//   console.log(dp);
//   console.log(pp);
//   console.log(op);

// }


// var oilp=oilPrice(10,2.5,45);


// function publicBusFair(n){
//     var car=n%50;
//     var pub_bus= car%11;
//     return pub_bus*250;
// }
// var cost= publicBusFair(65);
// console.log(cost);

var person1={
    name: 'John',
    friend: 'Akib'
}
var person2={
    name:'Akib',
    friend: 'John'
}
function isbestfriend(person1, person2){
       if(person1.name==person2.friend&&person1.friend==person2.name){
        return true;
       }    
       else return false;

}

var ans=isbestfriend(person1, person2);
console.log(ans); 
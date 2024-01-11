var a=[
    {
        name:'Akib',
        age: 24
    },
    {
        name:'Azman',
        age:19
    },
    {
        name:'Rabit',
        age: 25
    },{
        name:'Muzappar',
        age: 18 
    }
]

//a.sort()

a.sort(function(a,b){
    if(a.age > b.age)return 1
    else if(a.age < b.age)return -1
    else return 0
})
console.log(a)


a.sort(function(a,b){
    if(a.name > b.name)return 1
    else if(a.name < b.name)return -1
    else return 0
})
console.log(a)

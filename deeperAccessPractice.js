//=1 Sophia’s secondary school location?
let data = {
    Sophia: {
        id: 33,
        study: [{
                primary: [{
                        school_name: "ABC primary school",
                    },
                    {
                        location: "Peters burg",
                    },
                ],
            },
            {
                secondary: [{
                        school_name: "ABC secondary school",
                    },

                    {
                        location: "St Lorence",
                    },
                ],
            },
        ],
    },
};

console.log(data.Sophia.study[1].secondary[1].location);





//== 02

let MathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];

console.log(MathScore[1][0]);

//==03 How will you get the output a) level-2 b) 72.8691 


let data2 = [{
        "pHeroCourses": {
            "course-x": "web development"
        }
    },
    {
        "pHeroCourses": {
            "course-y": "phitron"
        }
    },
    {
        "pHeroCourses": {
            "course-z": "acc"
        }
    },
    {
        "pHeroCourses": {
            "course-xyz": "level-2"
        },
        "locationField": {
            "en-US": {
                "lat": 19.28563,
                "lon": 72.8691
            }
        }
    }
]
console.log(data2[3].pHeroCourses['course-xyz']);
console.log(data2[3].locationField['en-US'].lon);

//== 04 How will you get the output a) abc b) xyz

let activities = {
    activity1: [{
            name: "listen on spotify",


            song_list: {

                song_1: "abc",
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"

            },
            id: 2
        }
    ]
}
console.log(activities.activity1[0]['song_list']['song_1']);
console.log(activities.activity1[1].song_list['song_2']);

//=05 How will you display a) Petersburg b) Herry

let students = {
    2222: {

        name: "Jack",
        section: "C",
        class: "IX",
        address: {

            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }

    },
    3333: {

        name: "Herry",
        section: "D",
        class: "X",
        address: {


            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }

    }
}
console.log(students['2222'].address.city);
console.log(students['3333'].name);

//==06 How will you display a) programming er coddogosti b) VW c) Bangladesh

let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
}
console.log(instructor.additionalData.books[1])
// example data to be fed into app.js
// structure:
/*
{ ///////////////////////////////////
    title: "movie title",
    url: '/title1',
    description: "movie description",
    pictureUrl: "",
    length: { h: 1, m: 53 },
    averageScore: 5.0,
    timestamps: [
        {
            start: { m: 30, s: 5 },
            stop: { m: 32, s: 45 }
        },
    ],
    userReviews: [
        {
            name: "John",
            reviewDate: "mm/dd/yyyy",
            reviewScore: 5.0,
            reviewText: "",
            timestamps: [
                {
                    start: { m: 30, s: 5 },
                    stop: { m: 32, s: 45 }
                },
            ]
        },
    ]
},
*/

export const data = [
    { ///////////////////////////////////
        title: "Godzilla vs. Kong",
        url: '/godzilla_vs_kong',
        description: "Kong and his protectors undertake a perilous journey to find his true home. Along for the ride is Jia, an orphaned girl who has a unique and powerful bond with the mighty beast. However, they soon find themselves in the path of an enraged Godzilla as he cuts a swath of destruction across the globe. The initial confrontation between the two titans -- instigated by unseen forces -- is only the beginning of the mystery that lies deep within the core of the planet.",
        pictureUrl: "https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY1200_CR90,0,630,1200_AL_.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=odM92ap8_c0",
        length: { h: 1, m: 53 },
        averageScore: 3.6,
        timestamps: [
            {
                start: { m: 30, s: '05' },
                stop: { m: 32, s: 45 }
            },
            {
                start: { m: 100, s: 30 },
                stop: { m: 101, s: 10 }
            },
            {
                start: { m: 100, s: 30 },
                stop: { m: 101, s: '07' }
            },
        ],
        userReviews: [
            {
                name: "LauraStarfall",
                reviewDate: "3/27/2021",
                reviewScore: 4.0,
                reviewText: "some crazy bright flashes like explosions but basically okay!!",
                timestamps: [
                    {
                        start: { m: 30, s: '05' },
                        stop: { m: 32, s: 45 }
                    },
                ]
            },
            {
                name: "glycerin290",
                reviewDate: "4/1/2021",
                reviewScore: 3.0,
                reviewText: "I think its okay but there's to much crazy action. maybe someone is safe if they watch the rest of the movie but skip the parts where there is a lot of fighting ",
                timestamps: [
                    {
                        start: { m: 100, s: 30 },
                        stop: { m: 101, s: 10 }
                    },
                ]
            },
            {
                name: "Give_Me_Donuts",
                reviewDate: "4/1/2021",
                reviewScore: 4.0,
                reviewText: "I honestly expected this to have more flashing lights than it did!  I know that epilepsy is more than just flashing lights, but I hope someone found this useful.",
                timestamps: [
                    {
                        start: { m: 100, s: 30 },
                        stop: { m: 101, s: '07' }
                    },
                ]
            },
        ]
    },
    { ///////////////////////////////////
        title: "Color Out of Space",
        url: '/color_out_of_space',
        description: "After a meteorite lands in the front yard of their farm, Nathan Gardner and his family find themselves battling a mutant extraterrestrial organism that infects their minds and bodies, transforming their quiet rural life into a technicolor nightmare.",
        pictureUrl: "https://m.media-amazon.com/images/M/MV5BZjQ1YTM4M2UtMTQxNS00YjdjLTgwZGYtZTgzYmFiYjFkYzNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=RfYAXMwCpk0",
        length: { h: 1, m: 51 },
        averageScore: 4.5,
        timestamps: [
            {
                start: { m: 50, s: 34 },
                stop: { m: 50, s: 42 }
            },
            {
                start: { m: 50, s: 30 },
                stop: { m: 50, s: 40 }
            },
            {
                start: { m: 50, s: 34 },
                stop: { m: 50, s: 41 }
            },
        ],
        userReviews: [
            {
                name: "Maybebe.123",
                reviewDate: "9/7/2019",
                reviewScore: 4.5,
                reviewText: "Weird movie, but safe. Probably nothing too bad,.. I just don't want to give 5.0. maybe like one bad part.",
                timestamps: [
                    {
                        start: { m: 50, s: 34 },
                        stop: { m: 50, s: 42 }
                    },
                ]
            },
            {
                name: "heyheynonooo",
                reviewDate: "1/24/2020",
                reviewScore: 4.0,
                reviewText: "There's just this one part, but I think it is good otherwise. I liked this movie a lot!",
                timestamps: [
                    {
                        start: { m: 50, s: 30 },
                        stop: { m: 50, s: 40 }
                    },
                ]
            },
            {
                name: "99dame99",
                reviewDate: "1/24/2020",
                reviewScore: 5.0,
                reviewText: "why didnt i know about this movie before? i liked it and it wasn't bad for people with epilepsy",
                timestamps: [
                    {
                        start: { m: 50, s: 34 },
                        stop: { m: 50, s: 41 }
                    },
                ]
            },
        ]
    },
    { ///////////////////////////////////
        title: "Alien",
        url: '/alien',
        description: "In deep space, the crew of the commercial starship Nostromo is awakened from their cryo-sleep capsules halfway through their journey home to investigate a distress call from an alien vessel. The terror begins when the crew encounters a nest of eggs inside the alien ship. An organism from inside an egg leaps out and attaches itself to one of the crew, causing him to fall into a coma.",
        pictureUrl: "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR92,0,630,1200_AL_.jpg",
        trailerUrl: "https://youtu.be/jQ5lPt9edzQ",
        length: { h: 1, m: 57 },
        averageScore: 3.5,
        timestamps: [
            {
                start: { m: 105, s: '05' },
                stop: { m: 112, s: 44 }
            },
            {
                start: { m: '00', s: '00' },
                stop: { m: 17, s: '00' }
            },
            {
                start: { m: 104, s: 50 },
                stop: { m: 105, s: 50 }
            },
        ],
        userReviews: [
            {
                name: "Samjjj",
                reviewDate: "7/4/2018",
                reviewScore: 3.0,
                reviewText: "There are some flasshing lights and a lot of steam messing with shots. Great movie, but the end of it may be bad for someone with epilepsy.",
                timestamps: [
                    {
                        start: { m: 105, s: '05' },
                        stop: { m: 112, s: 44 }
                    },
                ]
            },
            {
                name: "bigj98",
                reviewDate: "8/1/2018",
                reviewScore: 2.0,
                reviewText: "this movie is boring movie and theres lots of flashing and stuff",
                timestamps: [
                    {
                        start: { m: '00', s: '00' },
                        stop: { m: 17, s: '00' }
                    },
                ]
            },
            {
                name: "90tacos",
                reviewDate: "10/26/2018",
                reviewScore: 4.0,
                reviewText: "Yeah, not great for people with epilepsy. This part is really bad, but maybe they should just watch it with a friend who can warn them.",
                timestamps: [
                    {
                        start: { m: 104, s: 50 },
                        stop: { m: 105, s: 50 }
                    },
                ]
            },
        ]
    },

];

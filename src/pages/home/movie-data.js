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
        url: '/godzilla',
        description: "Kong and his protectors undertake a perilous journey to find his true home. Along for the ride is Jia, an orphaned girl who has a unique and powerful bond with the mighty beast. However, they soon find themselves in the path of an enraged Godzilla as he cuts a swath of destruction across the globe. The initial confrontation between the two titans -- instigated by unseen forces -- is only the beginning of the mystery that lies deep within the core of the planet.",
        pictureUrl: "https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY1200_CR90,0,630,1200_AL_.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=odM92ap8_c0",
        length: { h: 1, m: 53 },
        averageScore: 4.5,
        timestamps: [
            {
                start: { m: 30, s: 5 },
                stop: { m: 32, s: 45 }
            },
            {
                start: { m: 100, s: 30 },
                stop: { m: 101, s: 10 }
            },
        ],
        userReviews: [
            {
                name: "John",
                reviewDate: "06/26/2020",
                reviewScore: 5.0,
                reviewText: "I loved this movie. Was fantastic",
                timestamps: [
                    {
                        start: { m: 30, s: 5 },
                        stop: { m: 32, s: 45 }
                    },
                ]
            },
            {
                name: "Jane",
                reviewDate: "10/03/2018",
                reviewScore: 4.0,
                reviewText: "This movie was fine, not my favorite",
                timestamps: [
                    {
                        start: { m: 100, s: 30 },
                        stop: { m: 101, s: 10 }
                    },
                ]
            },
        ]
    },
    { ///////////////////////////////////
        title: "Color Out of Space",
        url: '/color',
        description: "After a meteorite lands in the front yard of their farm, Nathan Gardner and his family find themselves battling a mutant extraterrestrial organism that infects their minds and bodies, transforming their quiet rural life into a technicolor nightmare.",
        pictureUrl: "https://m.media-amazon.com/images/M/MV5BZjQ1YTM4M2UtMTQxNS00YjdjLTgwZGYtZTgzYmFiYjFkYzNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=RfYAXMwCpk0",
        length: { h: 1, m: 51 },
        averageScore: 4.5,
        timestamps: [
            {
                start: { m: 30, s: 5 },
                stop: { m: 32, s: 45 }
            },
            {
                start: { m: 100, s: 30 },
                stop: { m: 101, s: 10 }
            },
        ],
        userReviews: [
            {
                name: "John",
                reviewDate: "06/26/2020",
                reviewScore: 5.0,
                reviewText: "I loved this movie. Was fantastic",
                timestamps: [
                    {
                        start: { m: 30, s: 5 },
                        stop: { m: 32, s: 45 }
                    },
                ]
            },
            {
                name: "Jane",
                reviewDate: "10/03/2018",
                reviewScore: 4.0,
                reviewText: "This movie was fine, not my favorite",
                timestamps: [
                    {
                        start: { m: 100, s: 30 },
                        stop: { m: 101, s: 10 }
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
        trailerUrl: "https://www.youtube.com/watch?v=svnAD0TApb8",
        length: { h: 1, m: 57 },
        averageScore: 4.5,
        timestamps: [
            {
                start: { m: 30, s: 5 },
                stop: { m: 32, s: 45 }
            },
            {
                start: { m: 100, s: 30 },
                stop: { m: 101, s: 10 }
            },
        ],
        userReviews: [
            {
                name: "John",
                reviewDate: "06/26/2020",
                reviewScore: 5.0,
                reviewText: "I loved this movie. Was fantastic",
                timestamps: [
                    {
                        start: { m: 30, s: 5 },
                        stop: { m: 32, s: 45 }
                    },
                ]
            },
            {
                name: "Jane",
                reviewDate: "10/03/2018",
                reviewScore: 4.0,
                reviewText: "This movie was fine, not my favorite",
                timestamps: [
                    {
                        start: { m: 100, s: 30 },
                        stop: { m: 101, s: 10 }
                    },
                ]
            },
        ]
    },

];

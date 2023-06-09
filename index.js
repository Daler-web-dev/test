// 1
// let cars = [18000,15000,22000,33000,5000,30000,40000,37000,60000,40000]

// let from = prompt('от')
// let up = prompt('до')

// let filtered = cars.filter(car_price => car_price >= from && car_price <= up)


// console.log(filtered);

// 2
// let cars = [18000,15000,22000,33000,5000,30000,40000,37000,60000,40000]

// let total = 0

// cars.filter(car_price => total += car_price)

// console.log(total);


// let arr = ["string", 22, true, null, {}, 12, "sdasd", 212,true]

// let string = 0
// let number = 0
// let object = 0
// let boolean = 0

// arr.filter(item => {
//     if(typeof(item) === "string") {
//         string++
//     }
// })

let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",

        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]


arr.filter(item => console.log(item.completed))
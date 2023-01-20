// Exercise 1 - Closures
// Update the createAdder function below so that
// the below code works as intended


function createAdder(adderNum){
    function add(num){
        return adderNum + num;
    };
    return add;
};

const addEight = createAdder(8);
console.log(addEight(10)); // 18
console.log(addEight(17)); // 25
console.log(addEight(50)); // 58
console.log(addEight(100)); // 108
console.log(addEight(92)); // 100

const addThree = createAdder(3);
console.log(addThree(10)); // 13
console.log(addThree(17)); // 20
console.log(addThree(50)); // 53
console.log(addThree(100)); // 103
console.log(addThree(92)); // 95


console.log('--------------------------------------')

// Exercise 2 - Promises 
// Using the below getMovieInfo function, which is a Promised-base function, write an asynchronous function (.then().catch() or async/await)
// called printMovieInfo that will take in a movie title and then either displays the movie information or logs an error with a console.warn().


function getMovieInfo(movieName){
    return new Promise((resolve, reject) => {
        if (movieName.length > 5){
            let movie = {
                id: 123,
                title: movieName,
                director: 'Christopher Spielberg',
                runtime: 157,
                description: 'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    })
}

function printMovieInfo(movieTitle){
    getMovieInfo(movieTitle)
        .then(movie => console.log(movie))
        .catch(e => console.warn(e))
};

// Example 1
printMovieInfo('Indiana Jones and the Dark Knight')
// Output: Indiana Jones and the Dark Knight directed by Christopher Spielberg. A story of Good vs Evil that runs for 157 minutes.

// Example 2
printMovieInfo('ET')
// Output: *Warning* ET cannot be accessed because it it too short

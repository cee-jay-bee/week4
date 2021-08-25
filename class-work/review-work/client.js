// var/const review
// declare and initialize
const monthsPerYear = 12;
let daysInThisMonth = 31;
let currentDay = 23;
let currentMonth = 8;
let months = [ `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` ]; 

console.log( `This month:`, months[ currentMonth - 1 ]);

// loop/conditional review
// loop through the end of this month
for (let i = currentDay; i <= daysInThisMonth + 1; i++) {
// if we pass the end of month
    if ( i > daysInThisMonth) {
        // move to next month
        currentMonth++;
        // console log new month
        console.log( `New month:`, months [ currentMonth - 1 ]);
    } // end if
    else {
        // console log each day
        console.log (`day:`, i);
    } // end else
} // end for

// function/object review
const nextMonth = () => {
    //move to the next month
    currentMonth++;
    // cycle back to Jan when go beyond Dec
    if (currentMonth > months.length){
        currentMonth = 1;
    } // reset back to start
    console.log(`current month:`, months[ currentMonth - 1 ]);
}// end nextMonth

const addTwoNumbers = (num0, num1) => num0 + num1; // end addTwoNumbers

console.log( addTwoNumbers ( 15, 35 ));
console.log( addTwoNumbers ( '15', 35 ));
console.log( addTwoNumbers ( 3, true ));

const showAll = array => {
    for (let i = 0; i < array.length; i++){
        console.log( array [ i ]);
    }
}

showAll(months);

let matrix = {
    title: `The Matrix`,
    year: 1999,
    genres: [ `sciFi`, `action`, `drama`],
    stars: [ `Keanu Reeves`, `Laurence Fishburne`, `Carrie-Anne Moss`, `Special Effects`]
}

let starWars = {
    title: `Star Wars`,
    year: 1977,
    genres: [ `sciFi`, `action`, `drama`],
    stars: [ `Carrie Fischer`, `Harrison Ford`, `Mark Hamill`, `Special Effects`]
}

const showMovieStars = movie => {
    // loop through this movie's stars array
    for (let stars in movie.stars) {
        // console log each star
        console.log(movie.stars[stars]);
    } // end for
} // end showMovieStars

showMovieStars(matrix);
showMovieStars(starWars);


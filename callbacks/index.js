// Using callback function in array functions

// 1. map() accept a callback function to update every item within the array to the result value of each call
let techs = ['Php','Laravel','Javascript'];
techs = techs.map((tech)=>tech.toUpperCase());
console.log(techs); // PHP, LARAVEL, JAVASCRIPT
// 2. filter()
let authors_whitelist = ['mouad'];
let authors = ['mouad', 'thomas', 'acquinas'];
let trsuted = authors.filter(trusted);
console.log(trsuted); // Only mouad is trsuted because he exists within among whitelisted authors

function trusted(author) {
    return authors_whitelist.indexOf(author) > -1;
}

// Using callback within event
let element = document.createElement('button');
element.addEventListener('click', function() { // <= is a callback function
    console.log('a button get clicked');
});
element.click();

/**
 * If you wanted to download data from a server (which may take long durations of time), 
 * it would be wasteful for your program or function to just freeze while you waited for the data to be fetched.
 * Instead, it's common practice to execute the fetching operation in the background.
 * 
 * Asynchronous callback - get my repositories from my github account
 */
fetch('https://api.github.com/users/Hostname47/repos')
    .then(response => response.json())
    .then(repos => console.log(repos));

console.log('this message may be printed before the reporsitories');

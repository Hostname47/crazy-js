// Synchronous

/**
 * -- In a synchronous environement -- The user should wait until foo method complete 
 * to have uname variable printed
 */
let uname = 'Mouad Nassri';
foo();
console.log(uname);

function foo(fooer='mouad') {
    console.log('Long-running task');
}

//

function hell1(n, callback) {
    let result = n + 1;
    callback(result);
}

function hell2(n, callback) {
    let result = n + 2;
    callback(result);
}

function hell3(n, callback) {
    let result = n + 3;
    callback(result);
}

function callback_hell() {
    hell1(0, result1 => {
        hell2(result1, result2 => {
            hell3(result2, result3 => {
                console.log(result3);
            })
        })
    }); // This is callback hell -> we need salvation huh ? -> Promises
}

callback_hell();

async function hello() {
    let response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

    return response;
}

console.log('before async');
hello()
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });
console.log('right after async');

function alarm(name, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Wake up, ${name}`);
        }, delay);
    });
}

async function usingAlarm() {
    let message = await alarm('Mouad', 2000);
    console.log(message);
}

usingAlarm();
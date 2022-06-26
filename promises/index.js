'use strict';

let mywebsite = fetch('https://api.github.com/users/Hoshhtname47/repos');

let res = mywebsite.then((response) => {
    if(!response.ok) {
        throw new Error(`ERROR with status : ${response.status}`);
    }

    return response.json();
}).then((data) => {
    // console.log(data);
}).catch((error) => {
    // console.log(error);
});

let promise1 = fetch('https://api.github.com/users/Hostname47/repos');
let promise2 = fetch('htterps://api.github.com/users/Hosztname47/repos');

// Fulilled ifall promises get fulfilled (rejected if one of the promises rejected)
Promise.all([promise1, promise2])
    .then((response) => {
        response.json()
            .then((data) => {
                // console.log(data);
            });
    }).catch((message) => {
        // console.log(message);
    })

// Fulfilled if one of the passed promises get fulfilled (rejected if all promises rejected)
Promise.any([promise1, promise2])
    .then((response) => {
        response.json()
            .then((data) => {
                // console.log(data);
            });
    }).catch((message) => {
        // console.log(message);
    });

// async-await

async function async_is_cool() {
    /**
     * Async functions allows mouad to work with asynchronous promise-based code.
     * asynch functions always return a promise. And so we cannot call an async function
     * and get the return value directly and start using it; instead we have to deal
     * with the returned data as a promise by chaining then functyion to get the response
     * from the promise returned
     * 
     * await keyword cannot be used outside async environement
     */
    try {
        let response = await fetch('https://api.github.com/users/Hostname47/repos');
        
        if(!response.ok) {
            throw new Error('Error occured with status : ' + response.status);
        }

        return response;
    } catch(error) {
        console.log('error : ' + error);
    }
}

async_is_cool()
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    });

// Create alarm promise
function alarm(delay, name) {
    return new Promise((resolve, reject) => {
        if(delay < 0) {
            throw new Error('Delay must be greather than 0');
        }
        setTimeout(() => {
            resolve(`Wake up ! ${name}`);
        }, delay);
    });
}

alarm(2000, 'mouad')
    .then((message) => {
        console.log("promise resolved with message : " + message);
    }).catch((error) => {
        console.log(error);
    });

// Interact with alarm API using async-await
async function aa() {
    try {
        let message = await alarm(4000, 'nassri');
        console.log("promise resolved with message : " + message);
    } catch(error) {
        console.log(error);
    }
}

window.onload = () => {
    document.body.addEventListener('click', function() {
        aa()
            .then(() => {
                console.log('async called from event handler');
            })
    });
}

let promise = new Promise((resolve, reject) => {
    reject('re-rejected');
});

setTimeout(() => {
    promise.then(() => {

    }).catch(() => {
        
    });
}, 10);

addEventListener('unhandledrejection', event => {
    // console.log('unhandled rejection for the following reason : ' + event.reason);
});

addEventListener('rejectionhandled', event => {
    // console.log('rejection handled');
});

new Promise((resolve, reject) => {
    resolve('success');
}).then((message) => {
    // console.log('resolved with message : ' + message);

    // throw new Error('hello world');
}).catch((error) => {
    // console.log("let's catch this error");
}).then(() => {
    // console.log('then after catch will be executed no matter what happened before');
});

function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

wait(2000).then(() => {
    // console.log('this code will be run after timer finished as a replacement of the callback passed manually');
});

Promise.reject('just rejected')
    .catch((error) => {
        console.log(error);
    });

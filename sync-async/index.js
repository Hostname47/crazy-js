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

/**
 * When we call callbacks inside callbacks and we get this pyramid shape,
 * that is callbacK hell, and it gets harder to debug, maintain or handle
 * errors.
 * For these reasons, most modern asynchronous APIs don't use callbacks. 
 * Instead, they use promises, and that's what I need to learn next.
 * 
 */
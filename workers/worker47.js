let tasks = ['mouad','nassri','hostname','47','is','mad'];

// tasks.forEach((task) => {
//     console.log(task);
//     await 
// });

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

addEventListener('message', (message) => {
    console.log('message passed from main thread to worker: ' + message.data.command);
    console.log(message.data);

    postMessage('worker finished');
});
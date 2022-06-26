const worker = new Worker('./worker47.js');

worker.postMessage({
    command: 'generate',
});

worker.addEventListener('message', message => {
    console.log('worker finished with message : ' + message.data);
});
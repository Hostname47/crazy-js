localStorage.setItem('name', 'Mouad Nassri');
console.log(localStorage.getItem('name')); // Persist even after closing browser

// sessionStorage.setItem('temp', 'This is temporarily data');
console.log(sessionStorage.getItem('temp'));

let db;
const openRequest = window.indexedDB.open('mydb', 1);

openRequest.addEventListener('error', () => {
    console.log('Database error');
});

openRequest.addEventListener('success', () => {
    db = openRequest.result;
});

openRequest.addEventListener('upgradeneeded', e => {
    db = e.target.result;

    const objectStore = db.createObjectStore('mydata', {
        keyPath: 'id',
        autoIncrement: true
    });

    objectStore.createIndex('title', 'title', { unique: false });
    objectStore.createIndex('body', 'body', { unique: false });

    console.log('Database setup complete');
});

function addData() {
    let record = {
        title: 'Hello world',
        body: 'Awesome body'
    };
    
    let transaction = db.transaction(['mydata'], 'readwrite');
    let objectStore = transaction.objectStore('mydata');
    let addRequest = objectStore.add(record);
    
    addRequest.addEventListener('success', () => {
        console.log('add finished with success.');
    });
    
    transaction.addEventListener('complete', () => {
        console.log('DB transaction finished with success');
    });
    transaction.addEventListener('error', () => {
        console.log('DB transaction failed');
    });
}

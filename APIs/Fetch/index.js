let content = document.querySelector('#content');

fetch('content.txt')
    .then(response => {
        return response.text();
    }).then(data => {
        content.textContent = data;
    })
    .catch(reason => {
        console.log('fetching failed with reason : ' + reason);
    });

// same above fetch api using XMLHttpRequest
let xhr = new XMLHttpRequest;

try {
    xhr.open('GET', 'content.txt');
    
    xhr.onload = function(response) {
        console.log(response);
        console.log(xhr.response);
    }
    
    xhr.onerror = function(e) {
        console.log('XHR Error');
    }
    
    xhr.send();
} catch(error) {
    console.log('XHR Error with status : ' + xhr.status);
}

// using fetch to run a post request

let fetchData = {
    method: 'POST',
    data: JSON.stringify({
        firstname: 'mouad',
        lastname: 'nassri',
        email: 'invalid@mouad.nothing'
    }),
    headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
    })
};

let url = 'https://www.google.com';

fetch(url, fetchData);

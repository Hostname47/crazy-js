function wait(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds*1000) );
}

document.getElementById('show-message').addEventListener('click', function() {
    let h1 = document.getElementsByTagName('h1')[0];
    let old = h1.textContent;

    wait(2)
        .then(() => h1.textContent = 'Mouad is using events right now :)')
        .then(() => {
            wait(2)
                .then(() => {
                    h1.textContent = old;
                }).then(() => {
                    console.log('done !');
                });;
        });

    grabMyGithubProjects()
        .then((data) => data.json())
        .then((repos) => {
            for(const repo of repos) {
                console.log(repo)
            }
        })
});

function grabMyGithubProjects(username='Hostname47') {
    return fetch('https://api.github.com/users/Hostname47/repos');
}

let toggle_event_button = document.getElementById('event-toggle-button');
const controller = new AbortController();

document.getElementById('attach-ev').addEventListener('click', () => {
    toggle_event_button.addEventListener('click', foo_event_handler, { signal: controller.signal });
});

document.getElementById('detach-ev').addEventListener('click', () => {
    controller.abort('no reason :p');
});

function foo_event_handler() {
    console.log('working..');
}

document.getElementById('boo').addEventListener('click', function(event) {
    // event parameter is called event object
    console.log(event);
}, false);

// Event handler properties
toggle_event_button.onclick = () => {
    console.log('attach handlers using event handler properties');
};
// Event handler using named function
toggle_event_button.onclick = foo_event_handler;

// document.body.addEventListener('click', (event) => {
//     console.log('body');
// }, { capture: true });

document.getElementById('bubbling-click').addEventListener('click', (event) => {
    console.log('bubbling clicked');
});

document.getElementById('capturing-click').addEventListener('click', (event) => {
    console.log('capturing clicked');
}, { capture: true });

document.getElementById('green').addEventListener('click', (event) => {
    console.log('green');
}, { capture: true });

document.getElementById('red').addEventListener('click', (event) => {
    console.log('red');
}, { capture: true });

document.getElementById('blue').addEventListener('click', (event) => {
    console.log('blue');
}, { capture:true });

// Event delegation
let last_ed_item;
document.getElementById('ed-container').addEventListener('click', function(event) {
    let target = event.target;

    if(!target.classList.contains('ed-item')) return;
    if(last_ed_item)
        last_ed_item.style.fontWeight = '400';

    target.style.fontWeight = 'bold';
    last_ed_item = target;
});

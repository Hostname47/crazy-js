let title = document.getElementsByTagName('h1')[0]; // we get the first element since every page contains only 1 h1
title.textContent = 'Working with DOM API functionalities';

let paragraph = document.querySelector('#good-paragraph'); // Return first element because we select with id
let paragraphs = document.querySelectorAll('.p-class'); // Return all elements that have p-class class (in an array-like structure called Nodelist)

// Interact with element using DOM API functionalities
paragraph.textContent = 'Hello, this is a good paragraph';
paragraph.classList.add('non-existing-class');

let linkContent = document.createTextNode('Mouad Nassri');
let link = document.createElement('a');
link.href = 'http://mouad-nassri.freecluster.eu';
link.appendChild(linkContent);
document.body.append(link);

title = document.getElementById('title'); // get element by its id

document.body.appendChild(title);

// title.remove(); // This is not supported in older brwosers, so try to use the following line
title.parentNode.removeChild(title); // remove title
document.body.prepend(title); // Add the title again (prepend: add it to the begining of body at the top)

console.log(document.styleSheets);

// Apply some styles to the paragraph
paragraph.style.color = '#ff3636';
paragraph.style.fontFamily = 'arial';
paragraph.style.textAlign = 'center';

let form = document.createElement('form');
let firstname = document.createElement('input');
let lastname = document.createElement('input');
let submit = document.createElement('button');
submit.textContent = 'add';

// form.append([firstname,lastname,submit]);
form.appendChild(firstname);
form.appendChild(lastname);
form.appendChild(submit);
document.body.appendChild(form);

submit.addEventListener('click', function(event) {
    event.preventDefault();
    
    console.log('firsname: ' + firstname.value);
    console.log('lastname: ' + lastname.value);
});
let button = document.querySelector('button');
let body = document.querySelector('body');
let span = document.querySelector('span');
let counter = 0;


// extract function
function incrementCounter(e) {
    e.stopPropagation();
    counter = counter + 1;
    span.innerHTML = counter;
    console.log('incrementCounter()');
}

function setCounterTo100() {
    counter = 100;
    span.innerHTML = counter;
    console.log('setCounterTo100()');
}

function add100ToCounter() {
    counter += 100;
    span.innerHTML = counter;
    console.log('add100ToCounter()');
}

button.onclick = incrementCounter;
body.onclick = add100ToCounter;
// body.onclick = setCounterTo100;


// incrementCounter; - по ссылке(чтение той же области памяти)  incrementCounter(); вызов функции;

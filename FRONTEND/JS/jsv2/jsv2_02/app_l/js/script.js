//////////////////////Выполняю по умолчанию/////////////////////
// по загрузке страницы
let a = 6;
let b = 'Hello';

console.log(a);

let inputIn = document.querySelector('.input-in'); // input
let button  = document.querySelector('button');     // button
let div     = document.querySelector('.out');


///////////////////////Событие//////////////////////////////////

button.onclick = function (){
    // кнопка будет нажата
    console.log('работает!');
    // console.log( inputIn.value ); // value - то что введено в input
    let b = +inputIn.value;          // + перевести в число
    console.log(b + 10);             // воспринимает как строку
    div.innerHTML = b;
    inputIn.value = '';              // очистить строку после себя
}

// document.querySelector('button').onclick = () => { //анонимная функция
//     console.log(document.querySelector('#one').value);
//     // style
//     document.querySelector('button').style.backgroundColor =
//     document.querySelector('#one').value
// }

// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one').value);
//     document.querySelector('span').innerHTML = document.querySelector('#one').value;
// }

document.querySelector('button').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('нажат');
    } else {
        console.log('не нажат');
    }
}

document.querySelector('#btn-2').onclick = (event) => {
    event.preventDefault(); // позволяет остановить перезагрузку формы
    // let text = document.querySelector('#two');
    // console.log(text.value);
    // // text.value = 'one';
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.two.value);
    console.log(form.elements.three.value);
}

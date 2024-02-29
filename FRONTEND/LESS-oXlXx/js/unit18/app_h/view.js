const button = document.querySelector('.button');
const round1 = document.querySelector('.round1');


function something(playerResult, computerResult, result) {
    return round1.innerHTML = `
    <p>player: ${playerResult} computer: ${computerResult}  результат ${result} </p>
    `;
    // main.appendChild(round1);
}


document.querySelector('.button').onclick = getResult;


// TODO сделать выпадающее что-то при нажатии на кнопку

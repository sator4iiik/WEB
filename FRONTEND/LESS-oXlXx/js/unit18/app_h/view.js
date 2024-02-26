// const button = document.querySelector('.button');
const main = document.querySelector('.main');
const round1 = document.querySelector('.round1');

function somthing(player, computer) {
    round1.innerHTML = `
    <p>xz: ${player} y: ${computer}</p>
    `;
    main.appendChild(round1);
}


document.querySelector('.button').onclick = somthing;


// TODO сделать выпадающее что-то при нажатии на кнопку

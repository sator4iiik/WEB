function getRandom(from, to) {
    const range = to - from + 1;
    let number = Math.random() * range;
    return Math.trunc(number) + from;
}

let player = getRandom(1, 6);
let computer = getRandom(1, 6);

function getPlayerResult() {
    return player;
}
function getComputerResult() {
    return computer;
}

function summResult() {
    if (player > computer) {
        return `WIN 😏`;
    } else if(player < computer) {
        return `LOSE 😔`;
    } else {
        return `TIE 😐`;
    }
}

getPlayerResult();
getComputerResult();

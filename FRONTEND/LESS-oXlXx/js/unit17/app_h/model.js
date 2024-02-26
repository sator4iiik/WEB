let caption = 'HELLO WORLD!';

function changeCaption(textValue) {
    caption = textValue;
}

function getCaption() {
    return caption;
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

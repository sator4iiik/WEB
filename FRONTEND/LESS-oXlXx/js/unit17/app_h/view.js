const elTextArea = document.getElementById('textarea');
const elHeaderField = document.getElementById('header_field');

console.log(elTextArea);
console.log(typeof elTextArea);
// мы храним web-apis только в view

function onclickButton() {
    handelChangeCaption(elTextArea.value);
}
document.querySelector('.b-1').onclick = onclickButton;

function renderHeaderField(captionText, randomColor) {
    // const captionText = getCaption();
    // const randomColor = takeColor();

    elHeaderField.innerText = captionText;
    elHeaderField.style.color = randomColor;

}

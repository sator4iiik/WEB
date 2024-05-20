function handelChangeCaption(textValue) {
    let caption;
    let randomColor;

    changeCaption(textValue);
    // в аргументах нельзя написать стейтменты, но в параметрах можно
    // потому нужно

    caption = getCaption();
    randomColor = getRandomColor();

    renderHeaderField(caption, randomColor);
}

function slidePlugin(activeSlide) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active') //какой слайд в превью (элемент массива с 0)

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidePlugin(1) // тут вызываю с функции

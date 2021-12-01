const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

console.log(slides.length);

const activeSlide = n => { //for off
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const activeDot = n => { //for off
    for(let dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    }  else {
        index++;
        prepareCurrentSlide(index);
    }

}
const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }  else {
        index--;
        prepareCurrentSlide(index); // мы заменили на вызов функции которая имеет в себе две нижнии функции
        // activeSlide(index);
        // activeDot(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);

    })
    console.log(item);
    console.log(indexDot);
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

let timer = 0;

const makeTimer = () => {
    clearInterval(timer)
    timer = setInterval(() => {
        nextSlide();
    }, 2000);
}

makeTimer();

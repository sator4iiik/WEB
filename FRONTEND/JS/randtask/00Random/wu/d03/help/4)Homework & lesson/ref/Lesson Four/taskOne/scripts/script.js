const prevButton = document.getElementById('button-prev');
const nextButton = document.getElementById('button-next');

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currSlide = 0;

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        prepareCurrentSlide(indexDot)
    });
});

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

setInterval(nextSlide, 2000);

function nextSlide() {
    if(currSlide < (slides.length - 1)) {
        currSlide++;
    } else {
        currSlide = 0;
    }
    prepareCurrentSlide(currSlide);
}
function prevSlide() {
    if(currSlide > 0) {
        currSlide--;
    } else {
        currSlide = (slides.length - 1);
    }
    prepareCurrentSlide(currSlide);
}

function prepareCurrentSlide(number){
    activeSlide(number);
    activeDot(number);
    
    function activeSlide(number) {
        for(let item of slides){
            item.classList.remove('active');
        }
        slides[number].classList.add('active');
    }
    function activeDot(number) {
        for(let item of dots){
            item.classList.remove('active');
        }
        dots[number].classList.add('active');
    }
}
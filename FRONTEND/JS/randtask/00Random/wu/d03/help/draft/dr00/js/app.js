//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// tabs

const tabs    = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const nestedTab = document.querySelector('nested-tab');
const nestedContent = document.querySelector('.nested-content');

console.log(tabs);
console.log(nestedTab);

const changeClass = (el) => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
        console.log(tabs.children[i]);
    }
    el.classList.add('active');
}

// можно не вешать на каждую кнопку обработчик событий
tabs.addEventListener('click', el => { // достаточно к обертке добавить айди #tabs
    console.log(el.target);
    const currTab = el.target.dataset.btn;         // обьект ивент.со свойством таргет.дотяниваемся до атрибута дата.указываем btn
    changeClass(el.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab){
            content[i].classList.add('active');
        }
    }
})

const changeClassNestedTab = el => {
    for (let i = 0; i < nestedTab.children.length; i++) {
        nestedTab.children[i].classList.remove('active');
        console.log(nestedTab.children[i]);
    }
    el.classList.add('active');
}

nestedTab.addEventListener('click', el => {
    const currTab = el.target.dataset.btn;
    changeClassNestedTab(el.target);
    for(let i = 0; i < nestedContent.length; i++) {
        nestedContent[i].classList.remove('active');
        if (nestedContent[i].dataset.content === currTab) {
            nestedContent[i].classList.add('active');
        }
    }
});


// дата атрибуты внутрь которых мы будем передавать специальные значения data-btn="1" html

//  у нас есть обертка tabs, мы сейчас понимаем по какой кнопке кликнули
//  после этого мы достаем оттуда значение дата атрибута и перебрасываем эктив на нужную кнопку
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const btnOpen  = document.getElementById('btn-open');
const modal    = document.getElementById('wrapper-modal');

const overlay  = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
});

const closeModal = () => {
    modal.classList.remove('active');
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
    Задание 1:

    Доделать слайдер

    1. Переписать код слайдера с урока по видео
    2. Доделать автоматическое переключение слайдов с интвервалом в 2 секунды

*/

/*
    Задание 2:

    Доделать tabs

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус

*/

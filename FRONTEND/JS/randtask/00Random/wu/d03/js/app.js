//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// tabs

const tabs    = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const nestedTabs = document.querySelector('.nested-tab');
const nestedContent = document.querySelector('.nested-content');

console.log(tabs);

const changeClass = (el) => {
    for(let i = 0; i < tabs.children.length || i < nestedTabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
        console.log(tabs.children[i]);
        console.log(nestedTabs.children[i])
    }
    el.classList.add('active');
}

// можно не вешать на каждую кнопку обработчик событий
tabs.addEventListener('click', e => { // достаточно к обертке добавить айди #tabs
    console.log(e.target);
    const currTab = e.target.dataset.btn;         // обьект ивент.со свойством таргет.дотяниваемся до атрибута дата.указываем btn
    changeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab){
            content[i].classList.add('active');
        }
    }
})

// const changeClassNestedTabs = (elem) => {
//     nestedTabs.forEach(nTb => {
//         nTb.classList.remove('active');
//     })
//     elem.classList.add('active')
// }

// nestedTabs.forEach(nesTab => {
//     nesTab.addEventListener('click', (e) => {
//         const target = e.target;
//         changeClassNestedTabs(target);
//         nestedContent.forEach(nesContent => {
//             nesContent.classList.remove('active');
//             if (target.dataset.nested === nesContent.dataset.nested) {
//                 nesContent.classList.add('active');
//             }
//         })
//     })
// });

// tabs.addEventListener('click', e => {
//     const target = e.target;
//     changeClass(target);
//     content.forEach(content => {
//         content.classList.remove('active');
//         if (target.dataset.btn === content.dataset.content) {
//             content.classList.add('active');
//         }
//     })
// })

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

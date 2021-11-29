const tabs_1 = document.querySelectorAll('[data-level="1"]>.tab-button');
tabs_1.forEach((item) => {
    const contents = document.querySelectorAll('[data-level="1"]>.content');

    item.addEventListener('click', event => {
        changeClass(event.target, tabs_1);
        changeContent(event.target.dataset.button, contents)
    });
});

const tabs_2 = document.querySelectorAll('[data-level="2"]>.tab-button');
tabs_2.forEach((item) => {
    const contents = document.querySelectorAll('[data-level="2"]>.content');

    item.addEventListener('click', event => {
        changeClass(event.target, tabs_2);
        changeContent(event.target.dataset.button, contents)
    });
});

function changeClass(element, component) {
    console.log(element);
    for(let item of component){
        item.classList.remove("active");
    }
    element.classList.add("active");
}

function changeContent(currTab, component) {
    for(let item of component){
        if(item.dataset.content === currTab) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    }    
}
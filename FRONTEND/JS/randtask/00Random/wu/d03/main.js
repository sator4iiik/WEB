const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const inTab = document.getElementById('inTab');
const contentInner = document.querySelectorAll('.content-inner');



const changeClasses = el => {
    for (let i=0; i<tabs.children.length;i++) {
        tabs.children[i].classList.remove('active')
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClasses(e.target);
    for (let i = 0; i < content.length;i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab){
            content[i].classList.add('active');
        }
    }
})

const changeClassesInTab = el => {
    for (let i=0; i < inTab.children.length; i++) {
        inTab.children[i].classList.remove('active')
    }
    el.classList.add('active');
}


inTab.addEventListener('click', el => {
    const currInTab = el.target.dataset.btn;
    changeClassesInTab(el.target);
    for(let i = 0; i < contentInner.length; i++) {
        contentInner[i].classList.remove('active');
        if (contentInner[i].dataset.content === currInTab) {
            contentInner[i].classList.add('active')
        }
    }
})

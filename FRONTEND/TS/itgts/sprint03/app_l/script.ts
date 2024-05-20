const a1 : string = 'Hello';
document.querySelector('.out-1').innerHTML = a1;

// получаем текст из парного тегв

const a2 : string = document.querySelector('.out-2').textContent;
console.log(a2);

const a3 : number = +document.querySelector('.out-3').textContent;
console.log(a3);

// получаем value из input

// явно приводим к типу инпут элемент
// const i5 = (<HTMLInputElement> document.querySelector('.i-5')).value;
// console.log(i5);

// const i5 = <HTMLInputElement> document.querySelector('.i-5');
// console.log(i5.value);

const i5 = document.querySelector('.i-5') as HTMLInputElement;
console.log(i5.value);

const i6 = document.querySelector('.i-6') as HTMLInputElement;
console.log(+i6.value);

// i6.value = 88; // ошибка так как оно принимает только строку
i6.value = '88';

const checkbox = <HTMLInputElement> document.querySelector('input[type="checkbox"]');
if (checkbox.checked) {
    console.log('checked');
}

//radiobutton
const r = <HTMLInputElement> document.querySelector('input[name="r"]:checked');
console.log(+r.value);

// получаем выбраный эелемент для селект (value)
// const select = document.querySelector('select');
// console.log(select.value);

const select = <HTMLSelectElement> document.querySelector('.s-1');
console.log(select.value);

select.value = 'aaa';

// если элемента нет на HTML странице
const i8 = document.querySelector('.i-9') as HTMLInputElement | null; //  | null если вдруг отпал класс .i-8 но ошибки не выдаст
console.log(i8);
// способ 1
console.log(i8?.value);
// способ 2
if (i8 !== null) {
    console.log(i8.value) // что бы выдало результат нужно заменить клас в док.сел на .i-8
}

let rrr = null // перезаписать даннык ответа с сервера

const promis = (url) => {
    return new Promise((resolve, reject) => {
        // как через resolve получить данные в консоль
        fetch(url)

        .then((data) => {
            // console.log(response);

            return data.json();
        })

        .then((response) => {
            // console.log(data);
            // resolve(response);
            console.log(response);
            rrr = response
            return response;
        })
    })
}



promis('https://jsonplaceholder.typicode.com/comments?_page=1');
let temp = null;

const f1 = async() => {
    const res = await promis('https://jsonplaceholder.typicode.com/comments?_page=1');
    console.log(res);
}


// читаю async await fetch
// переписую промис на асинк евейт

// фильтр мап файнд обьекты повторить
// переписать мап скрипт

// map - используется для создания нового массива,
// содержащего результаты вызова предоставленной функции для каждого элемента
// исходного массива. Этот метод не изменяет оригинальный массив, а возвращает
// новый, с элементами, преобразованными согласно логике, заложенной в
// callback-функции. - колбек функ возвращает измененную копию масива
// принимает об - el, необ - index, arr
// array.map(callback(currentValue[, index[, array]])[, thisArg])
// имеет ретурн

// find - найти - для поиска и возврата первого элемента массива, коллбек
// Если такой элемент не найден, метод возвращает undefined.

// reduse

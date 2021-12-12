
const revStr = require('./task_01'); //путь к файлу

// test( // служебный метод тест
//     'Проверяем реверс строки',
//     () => {
//         expect(revStr('hello www')).toBe('www olleh'); // метод который запускает функцию в которую мы подаем и что возвращает через метод туби то что долдно вернуть
//     } // кома если третий параметр есть
//     // если мы тестируем асинхронный код можно задать сколько милисекунд ожидать ответа
// );



// // есть несколько способов проверки, добавить тест - первая и это в лоб

// test( //ит алиас
//     'Проверяем реверс строки 2 вариант',
//     () => {
//         expect(revStr('blin ha')).toBe('ah nilb');
//     }
// );

// ////////////////METOD II/////////////////////////

describe(
    "Моя проверка", //тут обычно пишут ссылку на задачу в джире
    () => {
        const testCases = [
            {
                inString: 'hello',
                expected: 'olleh'
            },
            {
                inString: 'blin ha',
                expected: 'ah nilb'
            },
            {
                inString: 'Привет как дела 1234567890',
                expected: '0987654321 алед как тевирП'
            }
        ];
        testCases.forEach(test => {
            it (// ит это алиас метода тест _ тест принимает три параметра 1. описание теста 2. функция которая запускается и проверяет 3. таймаут если нужно ждать
                `Входящая строка : ${test.inString} ожидаю: ${test.expected}`, // интерполирую строку
                () => {
                    const res = revStr(test.inString);
                    expect(res).toBe(test.expected);
                }
            );
        });
    }
    );

// для сравнения примитивов .toBe для обьектов массивов toEqual

// npm test

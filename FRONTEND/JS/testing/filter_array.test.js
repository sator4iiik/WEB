const arrayFilter = require('./task_02');
// npm i jest разворачивает пакет в текущей папке открытой с терминала
describe(
    'фильтруем массив',
    () => {
        const testCases = [
            {
                in: [0, 1, 2, 3, 4],
                expected: [0,2,4]
            },
            {
                in: [true, false, true, false, true, false],
                expected: [true, true, true]
            },
        ];

        testCases.forEach(test => {
            it(  //тест принимает три параметра 1. описание теста 2. функция которая запускается и проверяет 3. таймаут если нужно ждать
                `in : ${test.in} expected: ${test.expected }`,
                () => { // функция которая описывает тест
                    const res = arrayFilter(test.in);
                    expect(res).toEqual(test.expected); // сравнение обьектов и массивов (туби не катит)
                }
            )
        })
    }
)
// для сравнения примитивов .toBe для обьектов массивов toEqual
// npm test ./filter_array.test.js

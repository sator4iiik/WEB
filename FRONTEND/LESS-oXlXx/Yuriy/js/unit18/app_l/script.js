const age = 101

const student = {
    first_name: 'Andrey',
    second_name: 'Sator',
    age: 21,
    grade: 1,

    method: function() {
        console.log('hello object method');
        // метод это некое свойство в обьекте которым выступает функция
    },

    methodRe: function() {
        console.log('BYE');
        // метод это некое свойство в обьекте которым выступает функция
    },

    methodNew() {
        console.log(this);
        // метод это некое свойство в обьекте которым выступает функция
    },

    // что бы внутри метода произвести чтение/запись данных у этого же обьекта необходим контекст исполнения this
    // то есть this это всегда обьект

    methodName() {
        console.log(this.first_name);
        return this.first_name;
        // поскольку метод это функция в обьекте то из метода можно вернуть данные (return)
    },

    getSecondName() {
        return this.second_name;
    },

    getFullName() {
        return this.first_name + ' ' + this.second_name;
    },

    setAge(n) {
        this.n = n;
    },

    setGradeAge(ageArg) {
        if (ageArg < 18) {
            return;
        }
        this.ageArg = ageArg;
        // просто гениальный ход с тем что если условие и если оно выполниться то результатом просто сделает возврат
        // если иф фолс, тогда выполниться основной участок кода
    },

    getAge() {
        return this.age;
    },
}

// есть обьект и действия которые его правят,


function incrementGrade() {
    student.grade = student.grade + 1;
}

// student.incrementGrade();


student.method();
student.methodNew();
student.methodName();
// student.setAge(18);


const nameF = student.methodName();
const nameS = student.getSecondName();
const fullName = student.getFullName();
student.setAge(18); // setAge(n)


nameF;
nameS;
fullName;
student.age;


// нужно давать осмысленные названия методам, и говорить чем он занимается
// интерполяция или шаблонный литерал
// get когда получаю set когда устанавливаю
// сеттер (метод доступа)

// метод доступа get это всегда return
// метод доступа set это всегда параметр в самом методе setAge(n)
// методы конкретно нужны для
// можно создавать типы после обьявления, потому что это динамическая типизация

// домашка заканчиваю работу с костями
// программа это самое важно, отображение можно допиливать по ходу дела
// програма это самое важное

// написать простое отображени

// в компоненте есть два уровня
import { useState } from "react"


// что бы бороться со всплытием нужно писать стрелочные функции
export const Home = () => {
    // верхний уровень
    const [valueInputA, setValInpA] = useState('');
    const [valueInputB, setValInpB] = useState('');

    const setStringA = (event) => {
        console.log(event.target.value);
        // event . target . element
        // хук ето крючки которые цепляются за жизненное состояние копонента
        // один хук одно действие
        setValInpA(event.target.value)
    }

    const setStringB = (event) => {
        console.log(event.target.value);
        setValInpB(event.target.value);
        // один хук одно действие
    }

    const handleClick = () => {
        const result = `${valueInputA} ${valueInputB}`;
        console.log(result);
    }

    return (
        // нижний уровень (рендер)
        // на нижнем уровне нельзя писать логику, даже переменную не смогу создать
        <div>
            <input type="text" value={valueInputA} placeholder="text1" onChange={setStringA} />
            <input type="text" value={valueInputB} placeholder='text2' onChange={setStringB} />
            <button type="button" onClick={handleClick}>click</button>
        </div>
    )
}

// export default Home;


// Домашка сделать такие же самое дейсвтие со вторым инпут
// когда нажимаешь по кнопке клик, должен увидеть что я написал в тех двух инпутах
// создаю еще одну функцию, эту функцию передаю в онклик баттн,
//  в середине этой функции должен законсолить два хука
// fetch переписать

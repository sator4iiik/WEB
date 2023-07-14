import React, {useState} from "react";

// let array = [10, () => {}]
// let counter = array[0]
// let setScounter = array[1]
// let [counter, setScounter] = array


export const App = () => {

    console.log('APP RENDERING');

    let [player1Counter, setPlayer1Counter] = useState(10);
    let [player2Counter, setPlayer2Counter] = useState(10);

    // let [counters, setCounters] = useState({
    //     c1: 10,
    //     c2: 10
    // })

    return (
        <>
            <div>
                <div>Антон</div>
                <div>{player1Counter}</div>
                <button onClick={() => {
                    setPlayer1Counter((actual) => actual + 1)
                }}>+</button>
            </div>
            <hr />
            <div>
                <div>Саня</div>
                <div>{player2Counter}</div>
                <button onClick={() => {
                    setPlayer2Counter(player2Counter + 1)
                    // debugger;
                }}>+</button>
            </div>
            <hr />
                <button onClick={() => {
                    setPlayer1Counter((actual) => actual - 1)
                    setPlayer2Counter(player2Counter - 1)
                }}>-</button>
                <button onClick={() => {
                    setPlayer1Counter(10)
                    setPlayer2Counter((actual) => 10)
                }}>reset</button>
        </>
    );
}

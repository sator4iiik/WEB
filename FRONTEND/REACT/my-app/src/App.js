import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [curText, setCurText] = useState('gggg')

  const handleClickAlert = (e) => {
    e.preventDefault()
    setCurText('нахуй послан')
  }
  return (
    <div onClick={handleClickAlert} className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          popey pevka
        </p>
        <a
          className="App-link"
          href="#"
          onClick={handleClickAlert}
        >
          SHMON`KA

        </a>
        {
            curText
          }
      </header>
    </div>
  );
}

export default App;

// процедурная функция function App {
//{керли брейтс}(пуси брейтс) [стронг брейтс]
//}
{/* <code>src/App.js</code> */}

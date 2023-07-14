import './App.css';

let text = 'test variable';

const c = {
  fontSize: '24px',
  fontStyle: 'italic',
  color: 'red'
}

function App() {
  let text2 = '222';
  return (
    <>
      <div className="container">
      <h1 style={c}>app_1</h1>
      <img src="./images/IMG_1999.PNG" alt="img" width="1000px"/>
      <ul>
        <li>Hello</li>
        <li>{text + text2}</li>
      </ul>
      </div>
    </>
  );
}

export default App;

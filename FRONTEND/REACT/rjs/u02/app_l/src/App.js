import Header from "./Heaer";
import About from "./About";
import Users from "./Users";
import Main from "./Main";

import { BrowserRouter as Router, Routes, Route, /*Link*/ } from 'react-router-dom';


function App() {
    return (
        <>
            <Header/>
            <Router>
                <Routes>
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                    <Route path="/users" component={Users} />
                </Routes>
            </Router>
        </>
    );
}

export default App;

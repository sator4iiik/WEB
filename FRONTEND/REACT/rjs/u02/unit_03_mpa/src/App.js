import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Categoty from "./Category";

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <>
        <Header />
        <Router>
            <Routes>
                <Route></Route>
            </Routes>
        </Router>
        <Footer />
        </>
    );
}

export default App;

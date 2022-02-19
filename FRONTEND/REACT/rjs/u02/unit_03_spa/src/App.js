import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import categoryDescription from "./CategoryDescription"
import Error from "./Error";

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from 'react-router-dom';



function App() {


    const site_nav = [
            { "link" : "/",     "text" : "Главная"},
            { "link" : "/about", "text" : "О сайте"},
            { "link" : "/cat", "text" : "Категории"}
        ]


    const cate_nav = [
            { "link" : "/cat/notebook", "text" : "Ноутбуки"},
            { "link" : "/cat/monitor", "text" : "Мониторы"},
            { "link" : "/cat/cellphone", "text" : "Мобильные"}
        ]


    return (
        <>
        <Router>
        <Header dataNav={site_nav}/>
            <Switch>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/category" element={<Category dataNav={cate_nav} />} />
                <Route path="/category/:catName" element={categoryDescription} />
                <Route path="/Footer" element={<Footer />} />
                <Route path='*' element={<Error />} />
            </Switch>
        </Router>
        </>
    );
}

export default App;

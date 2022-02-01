import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import categoryDescription from "./CategoryDescription"
import Error from "./Error";

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from 'react-router-dom';

const dataSiteNav = {
        site_nav : [
            { "link" : "/",         "text" : "Ноутбуки"},
            { "link" : "/about",    "text2" : "О сайте"},
            { "link" : "/category", "text2" : "Категории"},
        ]
};

// const dataCateNav = {
//         cate_nav : [

//         ]
// };

function App() {
    return (
        <>
        <Router>
        <Header dataNav={dataSiteNav}/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/category" component={Category} />
                <Route path="/cat/:catName" component={categoryDescription} />
                <Route component={Error} />
            </Switch>
        </Router>
        <Footer />
        </>
    );
}

export default App;

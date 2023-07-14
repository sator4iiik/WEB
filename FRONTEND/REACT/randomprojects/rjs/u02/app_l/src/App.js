<<<<<<< HEAD
import Header from "./Heaer";
import About from "./About";
import Users from "./Users";
import Main from "./Main";

import { BrowserRouter as Router, Routes, Route, /*Link*/ } from 'react-router-dom';

=======
import Header from "./Header";
import About from "./About";
import Users from "./Users";
import Main from "./Main";
import UserId from "./UserId";
import Error from "./Error";

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from "react-router-dom";
>>>>>>> 701180643b4c86eaf51694a9f7ba7274fbd443f3

function App() {
    return (
        <>
<<<<<<< HEAD
            <Header/>
            <Router>
                <Routes>
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                    <Route path="/users" component={Users} />
                </Routes>
=======
            <Header />
            <Router>
                {/* <nav>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </nav> */}
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                    <Route exact path="/users" component={Users} />
                    <Route path="/users/:userName" component={UserId} />
                    <Route component={Error} />
                </Switch>
>>>>>>> 701180643b4c86eaf51694a9f7ba7274fbd443f3
            </Router>
        </>
    );
}
<<<<<<< HEAD

=======
// exact это исключение
>>>>>>> 701180643b4c86eaf51694a9f7ba7274fbd443f3
export default App;

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
// useLocation вместо useRouteMatch


function Users() {
    let url = useLocation();
    console.log(url);
    return(
        <>
        <h1>Users</h1>
        <ul>
            <li><Link to={`${url.pathname}/ivanov`}>Ivanov</Link></li>
            <li><Link to={`${url.pathname}/kolobkov`}>Kolobkov</Link></li>
            <li><Link to={`${url.pathname}/bosenko`}>Bosenko</Link></li>
        </ul>
        </>
    );
}

export default Users;


//             <li><a href="./users/ivanov">Ivanov</a></li>

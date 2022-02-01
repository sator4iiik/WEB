import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Category() {
    let url = useLocation();
    console.log(url);
    return(
        <>
            <h1>Category</h1>
            <ul>
                <li><Link to={`${url.pathname}/CategoryDescription`}></Link></li>
            </ul>
        </>
    );
}

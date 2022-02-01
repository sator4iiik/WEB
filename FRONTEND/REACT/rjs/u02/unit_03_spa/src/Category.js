import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Category() {
    let url = useLocation();
    let categoryNav = props.dataCateNav;
    const listItem2 = categoryNav.map( item => <li key="hey"><a href={item.link}>{item.text}</a></li>);

    return(
        <>
            <h1>Category</h1>
            <a href="/category">Назад</a>
            <ul>
                {listItem2}

            </ul>
        </>
    );
}

export default Category;

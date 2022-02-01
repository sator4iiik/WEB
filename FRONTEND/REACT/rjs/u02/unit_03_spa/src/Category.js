import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

function Category() {
    let url = useRouteMatch();
    console.log(url);
    return(
        <>
            <h1>Category</h1>
            <a href="/category">Назад</a>
            <ul>
                <li><Link to="/cat/notebook">Ноутбуки</Link></li>
                <li><Link to="/cat/monitor">Мониторы</Link></li>
                <li><Link to="/cat/cellphone">Мобильные приложения</Link></li>
            </ul>
        </>
    );
}

export default Category;

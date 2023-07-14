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
                <li><a href="/cat/notebook">Ноутбуки</a></li>
                <li><a href="/cat/monitor">Мониторы</a></li>
                <li><a href="/cat/cellphone">Мобильные приложения</a></li>
            </ul>
        </>
    );
}

export default Category;

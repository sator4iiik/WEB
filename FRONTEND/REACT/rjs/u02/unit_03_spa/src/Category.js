import { useLocation } from "react-router-dom";

function Category(props) {
    let url = useLocation();
    let categoryNav = props.dataNav;
    const listItem2 = categoryNav.map( item => <li key="hey"><a href={item.link}>{item.text}</a></li>);

    return(
        <>
            <h1>Category</h1>
            <ul>
                {listItem2}
            </ul>
        </>
    );
}

export default Category;

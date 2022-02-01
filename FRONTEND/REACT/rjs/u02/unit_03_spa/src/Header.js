import {Link} from "react-router-dom";

function Header(props) {
    let dataP = props.site_nav;
    const listItem = dataP.map( item => <li key="hey"><a href={item.link}>{item.text}</a></li>);
    return(
        <>
            <nav>
                <ul>
                    {listItem}
                </ul>
            </nav>
        </>
    );
}


export default Header;


{/*
<li><Link to="/">{}</Link></li>
<li><Link to="/about">О сайте</Link></li>
<li><Link to="/category">Категории</Link></li> */}

import {Link} from "react-router-dom";

function Header(props) {

    return(
        <>
            <nav>
                <ul>
                    <Nav nav={props.dataNav.site_nav} />
                </ul>
            </nav>
        </>
    );
}

function Nav(props) {
    let dataP = props.site_nav;
    const listItem = dataP.map( item => <li key="hey"><a href={item.link}>{item.text}</a></li>);
    return(
        <>
            <ul>
                    {listItem}
            </ul>
        </>
    );
}

export default Header;


{/*
<li><Link to="/">{}</Link></li>
<li><Link to="/about">О сайте</Link></li>
<li><Link to="/category">Категории</Link></li> */}

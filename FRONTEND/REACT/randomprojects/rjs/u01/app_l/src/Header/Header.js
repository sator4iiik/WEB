import Sidebar from '../Sidebar/Sidebar';
import './Header.css';


function Header(props){
    return(
        <div className="Header-site-header">
            <h1>React site</h1>
            <h2>utp slogan</h2>
            <p>{props.paragraphProps}</p>
            <Sidebar nav={props.nav.navi}/>
            <p>{props.secondParaProps}</p>
            <Nav nav={props.nav.navi}/>
        </div>
    );
}

function Nav(props) {
    let data = props.nav;
    const listItem = data.map( item => <li><a href={item.link}>{item.text}</a></li>)
    return (
        <nav>
            <ul>
                {listItem}
            </ul>
        </nav>
    )
}

export default Header;

// вынес заголовок в отдельный компонент HEADER

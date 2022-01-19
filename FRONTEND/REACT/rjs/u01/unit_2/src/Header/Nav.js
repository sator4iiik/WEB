function Nav(props){
    let data = props.nav;

    const listLink = data.map(item => <li key ={item.text}>
                                            <a href={item.link}>{item.text}</a>
                                    </li>);
    return(
        <nav>
            <>
                <ul className="main-navigation">
                    {/* тут будет props */}
                    {listLink}
                </ul>
            </>
        </nav>
    );
}

export default Nav;

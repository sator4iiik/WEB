import './Footer.css'

function Footer(props){
    return(
        <div className="Footer-site-footer">
            <b>React Site</b>
            <p>{props.tridParaProps}</p>
            <p>2022 copyright. All rigfts reserved</p>
        </div>
    )
}

export default Footer;

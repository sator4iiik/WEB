import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main   from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import Goods from '../Header/Goods';
import './App.css';


const mainData = {
    main_mytext : 'mytext test site бла бла бла',
    main_mytex2 : 'о привет',
    navi : [
        { "link" : "nav2", "text" : "my link"},
        { "link" : "nav4", "text" : "my link"},
        { "link" : "nav8", "text" : "my link 4"},
        { "link" : "nav9", "text" : "my link3"}
    ]
};

const goodsDat = [
    {"title" : "apple", "cost" : 330, "image" : "https://cdn3.iconfinder.com/data/icons/iphone-x-line/512/iPhoneX-01-1024.png"},
    {"title" : "pear",  "cost" : 220, "image" : "https://cdn4.iconfinder.com/data/icons/fruits-79/48/18-green_pear-1024.png"}
];

function App(){
    return(
        <div className="container">
            <Header paragraphProps="данные которые прогнал пропс" secondParaProps="вторые данные которые прогнал пропс" nav={mainData}> {/*   можно писать сокращенный вид <Header/> где хедер организован в отдельном компоненте*/}

            </Header>
            <Main data={mainData}/>
            <Sidebar/>
            {goodsDat.map( item =>  <Goods title={item.title} cost={item.cost} image={item.image}/>)}
            {/* <Goods title={goodsDat[0].title} cost={goodsDat[0].cost} image={goodsDat[0].image}/> */}
            <Footer tridParaProps="3 данные которые прогнал пропс"/>
        </div>
    );
}

export default App;

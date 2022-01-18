import './Main.css';
import articles from '../data/articles.json';

console.log(articles);

function Main(props) {
    return (
        <div className='Main'>
                <p>{props.data.main_mytex2}</p>
            {/* jsx */} {/* {}область в которую будут выведены данные джаваскрипта (json) в данном случае */}
            {articles.map(item=>
            <section>
                <h2>{item.title}</h2>
                <div>{item.body}</div>
            </section>)}
        </div>
    );
}

export default Main;

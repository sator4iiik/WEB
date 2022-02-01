import { useParams } from "react-router-dom";

function CategoryDescription() {
    let {catName} = useParams();
    return(
        <div>
            <h1>CategoryName</h1>
        </div>
    );
}

export default CategoryDescription;

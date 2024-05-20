const promis = () => {

    return new Promise((resolve, reject) => {

        const url = 'https://jsonplaceholder.typicode.com/comments?_page=1';

        fetch(url)

        .then((data) => {
            // console.log(data);
            return data.json(); // первый then должен вернуть данные с .json()
        })

        .then((response) => {
            // console.log(response);
            return response;
        })
    })
}
// promis();

const f4 = async() => {
    const resp = await promis()
    console.log(resp);
}

f4();

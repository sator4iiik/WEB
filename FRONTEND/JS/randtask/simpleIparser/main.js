const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const imageUrl = '';

axios.get('https://this-person-does-not-exist.com/en').then(html => {
    const $ = cheerio.load(html.data);
    let text = '';
    $('#avatar').each((i, elem) => {
        text += `${$(elem).text()}\n`
    })
    console.log(text)
})

axios({
  method: 'get',
  url: imageUrl,
  responseType: 'stream'
})
.then(response => {
  response.data.pipe(fs.createWriteStream('image.png'))
})
.catch(error => {
  console.log(error);
})

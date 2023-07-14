const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://sogodnisvyato.com.ua/').then(html => {
    const $ = cheerio.load(html.data);
    let text = '';
    $('#holidaysToday > section.ukranian-holidays > div.container > ul > li').each((i, elem) => {
        text += `${$(elem).text()}\n`;
    })
    console.log(text);
})
// запуск node main.js

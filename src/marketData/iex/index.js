// https://iexcloud.io/
const axios = require('axios');

function iex (apiKey) {
    return Object.freeze({
        getNews,
        getStockData
    });

    async function getNews ({ ticker, last = 5 }) {
        const url = buildRequest(`/stock/${ticker}/news/last/${last}/`);

        try {
            const news = await axios.get(url);

            return news.data;
        }catch (error) {
            throw Error(error.message);
        }
    }

    async function getStockData ({ ticker }) {
        const url = buildRequest(`/stock/${ticker}/advanced-stats`);

        try {
            const data = await axios.get(url);

            return data.data;
        }catch (error) {
            throw Error(error.message);
        }
    }

    function buildRequest (url) {
        const baseUrl = 'https://cloud.iexapis.com/v1';

        return `${baseUrl}${url}?token=${apiKey}`;
    }
}

module.exports = iex;
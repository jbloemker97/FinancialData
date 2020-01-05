const makeApi = require('./iex/');
const { iexSecret } = require('../../config/');
const httpResponse = require('../helpers/http-response');

function marketDataService () {
    return Object.freeze({
        getNews,
        getStockData
    })

    async function getStockData ({ ticker }) {
        const api = makeApi(iexSecret);

        try {
            const data = await api.getStockData({ ticker });

            return httpResponse({ statusCode: 200, data: data });
        }catch (error) {
            console.log(error)
            return httpResponse({ statusCode: 404, data: error.message });
        }
    }

    async function getNews ({ ticker }) {
        const api = makeApi(iexSecret);

        try {
            const news = await api.getNews({ ticker });

            return httpResponse({ statusCode: 200, data: news })
        }catch (error) {
            return httpResponse({ statusCode: 404, data: error.message })
        }
    }
}

module.exports = marketDataService;
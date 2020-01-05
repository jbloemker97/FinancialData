const marketDataService = require('./marketData-service')();
const httpResponse = require('../helpers/http-response');
const { contains } = require('../helpers/utils');

async function handleMarketDataRequest (httpRequest) {
    switch (httpRequest.method) {
        case 'GET':
            if (contains('/api/v1/data/news/', httpRequest.path) && httpRequest.pathParams.ticker) return await marketDataService.getNews({ ticker: httpRequest.pathParams.ticker }); // Get News
            if (contains('/api/v1/data/stock/', httpRequest.path) && httpRequest.pathParams.ticker) return await marketDataService.getStockData({ ticker: httpRequest.pathParams.ticker }) // Get Ticker Data - Advanced plan
            
            // If no route is found
            return httpResponse({ statusCode: 404, data: 'Could not get route' })

        default:
            return httpResponse({ statusCode: 404, data: 'Could not get route' })
    }
}

module.exports = handleMarketDataRequest;
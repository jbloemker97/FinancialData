const adaptRequest = require('../helpers/adapt-request');
const handleDataRequest = require('./marketData-endpoint')

async function marketDataController (req, res) {
    const httpRequest = adaptRequest(req);

    try {
        // Handle request
        const response = await handleDataRequest(httpRequest);
        
        // Set Headers
        if (response.headers) {
            res.set(response.headers)
        }

        // Send response
        res
            .status(response.statusCode)
            .send(response);

    }catch (error) {
        throw Error(error.message)
    }

}

module.exports = marketDataController;
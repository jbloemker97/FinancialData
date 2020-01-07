const httpResponse = require('../src/helpers/http-response');

const chai = require('chai');
const expect = chai.expect;

describe('HTTP Response Success', () => {
    it('200 Response', () => {
        const data = 'success';
        const response = httpResponse({ 
            statusCode: 200,
            data: data 
        });

        expect(response).to.have.property('success');
        expect(response).to.have.property('success').to.equal(true);
        expect(response).to.have.property('statusCode');
        expect(response).to.have.property('statusCode').to.equal(200);
        expect(response).to.have.property('data');
        expect(response).to.have.property('data').to.equal(data);
        expect(response).to.have.property('headers');
        expect(response).to.have.property('headers').to.equal(null);
    });

    it('404 Response', () => {
        const data = 'error';
        const response = httpResponse({ 
            statusCode: 404,
            data: data 
        });

        expect(response).to.have.property('success');
        expect(response).to.have.property('success').to.equal(false);
        expect(response).to.have.property('statusCode');
        expect(response).to.have.property('statusCode').to.equal(404);
        expect(response).to.have.property('data');
        expect(response).to.have.property('data').to.equal(data);
        expect(response).to.have.property('headers');
        expect(response).to.have.property('headers').to.equal(null);
    });
});
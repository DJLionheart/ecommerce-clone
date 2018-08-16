const fns = require('../utils/fns');

const sampleData = require('../components/Shop/ProductPage/sampleProducts');

test('getCurrentProduct should return an object', () => {
    let productTest1 = fns.getCurrentProduct(sampleData, 'aviator-b-w')

    expect(productTest1).toBe(sampleData[3]);
})
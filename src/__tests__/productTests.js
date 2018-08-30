const fns = require('../utils/fns');

const sampleData = require('../assets/data/shop/sampleProducts');

test('getCurrentProduct should return an object', () => {
    let productTest1 = fns.getCurrentProduct(sampleData, 'aviator-b-w');

    expect(typeof productTest1).toBe('object');
})

test('getCurrentProduct should return the correct data', () => {
    let dataTest = fns.getCurrentProduct(sampleData, 'aviator-b-w');

    expect(dataTest).toBe(sampleData[3]);
})
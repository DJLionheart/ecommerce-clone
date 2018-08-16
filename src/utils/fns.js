module.exports = {
    getCurrentProduct: (productList, productName) => {
        let filteredList = productList.filter( element => {
            return element.productName === productName;
        })

        return filteredList[0];
    }
}
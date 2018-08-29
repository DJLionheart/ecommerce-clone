module.exports = {
    getCurrentProduct: (productList, productName) => {
        let filteredList = productList.filter( element => {
            return element.productName === productName;
        })

        return filteredList[0];
    },

    getGallery: (galleryList, match) => {
        let galleryArr = galleryList.filter( gallery => {
            return gallery.match === match;
        })

        return galleryArr[0];
    }
}
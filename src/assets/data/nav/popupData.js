const galleryData = require('../gallerylist');

module.exports = {
    'work': {
        title: 'Whispering Sea',
        alt: 'product preview',
        desc: "Experience the stunning beauty of Peter Lik's masterwork, " + "Whispering Sea".italics() + ".",
        learnMore: '/products/whispering-sea',
        links: [
            {num: '/01', name: 'New Releases', path: '/shop/collections/new-release'}, 
            {num: '/02', name: 'Abstract', path: '/shop/collections/abstract'},
            {num: '/03', name: 'Architecture', path: '/shop/collections/architecture'},
            {num: '/04', name: 'Australia', path: '/shop/collections/australia'},
            {num: '/05', name: 'Aviator', path: '/shop/collections/aviator'},
            {num: '/06', name: 'Cities', path: '/shop/collections/cities'},
            {num: '/07', name: 'Desert', path: '/shop/collections/desert'},
            {num: '/08', name: 'Europe', path: '/shop/collections/europe'},
            {num: '/09', name: 'Fields', path: '/shop/collections/fields'},
            {num: '/10', name: 'Mountains', path: '/shop/collections/mountains'},
            {num: '/11', name: 'Northwest', path: '/shop/collections/northwest'},
            {num: '/12', name: 'Skies', path: '/shop/collections/skies'},
            {num: '/13', name: 'Southwest', path: '/shop/collections/southwest'},
            {num: '/14', name: 'Trees', path: '/shop/collections/trees'},
            {num: '/15', name: 'Volcanoes', path: '/shop/collections/volcanoes'},
            {num: '/16', name: 'Water', path: '/shop/collections/water'},
            {num: '/17', name: 'Wildlife', path: '/shop/collections/wildlife'},
            {num: '/18', name: 'View All', path: '/shop/collections/limited-edition'}
        ],
    },

    'galleries': {
        title: 'Mandalay Bay',
        alt: 'gallery preview',
        desc: "Located on The Strip, this fine art gallery is positioned amongst some of the city's well-known names in luxury.",
        learnMore: '/pages/lik-mandalay',
        links: galleryData.default
    },

    'artist': {
        links: [
            {order: '/01', title: 'Biography', path: '/pages/biography'},
            {order: '/02', title: 'Awards', path: '/pages/awards'},
            {order: '/03', title: 'Media', path: '/pages/media'}
        ]
    },

    'shop': {
        title: 'Equation of Time',
        alt: 'product preview',
        desc: "This epic collection of world-class photography showcases Peter's most stunning visions from around the world.",
        learnMore: '/products/equation-of-time',
        links: [
            {num: '/01', name: 'Limited Editions', path: '/collections/limited-edition'},
            {num: '/02', name: 'Open Editions', path: '/collections/open-edition'},
            {num: '/03', name: 'Element Packs', path: '/collections/element-packs'},
            {num: '/04', name: 'Element Frames', path: '/collections/element-frames'},
            {num: '/05', name: 'Books', path: '/collections/books'},
            {num: '/06', name: 'Equation of Time', path: '/products/equation-of-time'}
        ]

    },

    'menu': {
        links: [
            {name: 'Create Account', path: '/account/register'},
            {name: 'Log in', path: '/account/login'},
            {name: 'Wishlist', path: '/wishlist'},
        ]
    }
}
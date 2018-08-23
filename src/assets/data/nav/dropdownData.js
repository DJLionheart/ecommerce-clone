const galleryData = require('../gallerylist');

const aboutUs = require('../menu-links/aboutUs');
const customerService = require('../menu-links/customerService');
const explore = require('../menu-links/explore');
const legal = require('../menu-links/legal');
const sales = require('../menu-links/sales');

module.exports = {
    'work': {
        title: 'Whispering Sea',
        alt: 'product preview',
        desc: "Experience the stunning beauty of Peter Lik's masterwork, ",
        descTitle: 'Whispering Sea',
        learnMore: '/products/whispering-sea',
        links: [
            {num: '/01', name: 'New Releases', path: '/collections/new-release'}, 
            {num: '/02', name: 'Abstract', path: '/collections/abstract'},
            {num: '/03', name: 'Architecture', path: '/collections/architecture'},
            {num: '/04', name: 'Australia', path: '/collections/australia'},
            {num: '/05', name: 'Aviator', path: '/collections/aviator'},
            {num: '/06', name: 'Cities', path: '/collections/cities'},
            {num: '/07', name: 'Desert', path: '/collections/desert'},
            {num: '/08', name: 'Europe', path: '/collections/europe'},
            {num: '/09', name: 'Fields', path: '/collections/fields'},
            {num: '/10', name: 'Mountains', path: '/collections/mountains'},
            {num: '/11', name: 'Northwest', path: '/collections/northwest'},
            {num: '/12', name: 'Skies', path: '/collections/skies'},
            {num: '/13', name: 'Southwest', path: '/collections/southwest'},
            {num: '/14', name: 'Trees', path: '/collections/trees'},
            {num: '/15', name: 'Volcanoes', path: '/collections/volcanoes'},
            {num: '/16', name: 'Water', path: '/collections/water'},
            {num: '/17', name: 'Wildlife', path: '/collections/wildlife'},
            {num: '/18', name: 'View All', path: '/collections/limited-edition'}
        ],
    },

    'galleries': {
        title: 'Mandalay Bay',
        alt: 'gallery preview',
        desc: "Located on The Strip, this fine art gallery is positioned amongst some of the city's well-known names in luxury",
        learnMore: '/pages/lik-mandalay',
        links: galleryData.default
    },

    'artist': {
        links: [
            {num: '/01', name: 'Biography', path: '/pages/biography'},
            {num: '/02', name: 'Awards', path: '/pages/awards'},
            {num: '/03', name: 'Media', path: '/pages/media'}
        ]
    },

    'shop': {
        title: 'Equation of Time',
        alt: 'product preview',
        desc: "This epic collection of world-class photography showcases Peter's most stunning visions from around the world",
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
        ],
        aboutUs: {name: 'About Us', links: aboutUs.default},
        explore: {name: 'Explore', links: explore.default},
        customerService: {name: 'Customer Service', links: customerService.default},
        sales: {name: 'Sales', links: sales.default},
        legal: {name: 'Legal', links: legal.default}
    }
}
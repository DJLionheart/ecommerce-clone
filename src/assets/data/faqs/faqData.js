module.exports = {
    tableOfContents: {
        title: 'Table of Contents',
        links: [
            {name: 'General Questions', path: '/pages/faq#faq-general'},
            {name: 'About LIK Fine Art', path: '/pages/faq#faq-about'},
            {name: 'Craftsmanship', path: '/pages/faq#faq-craftsmanship'},
            {name: 'Care and Handling', path: '/pages/faq#faq-care-handling'},
            {name: 'Purchasing Online', path: '/pages/faq#faq-purchase-online'},
            {name: 'Shipping and Delivery', path: '/pages/faq#faq-shipping-delivery'},
            {name: 'Returns and Exchanges', path: '/pages/faq#faq-returns-exchanges'},
            {name: 'My Account', path: '/pages/faq#faq-account'}
        ]
    },
    
    content: {
        'general': {
            name: 'General Questions',
            data: [
                {
                    heading: 'Where are you located?', bold: true, paragraphs: [
                    'Corporate Offices',
                    'Our corporate offices and production facilities are located in Las Vegas, Nevada.',
                    ]
                },

                {
                    heading: 'LIK Fine Art Galleries', bold: false, paragraphs: [
                        'We currently operate 12 Galleries with locations in the following cities: Aspen, Colorado; Houston, Texas; La Jolla, California; Las Vegas, Nevada; Key West and Miami, Florida; Soho, New York; Waikiki and Lahaina, Hawaii.'
                    ]
                },

                {
                    heading: 'What are your hours of operations?', bold: true, paragraphs: [
                        'Corporate Offices',
                        'LIK Fine Art is open Monday through Friday from 8am to 5pm pst.',
                        ' ',
                        'LIK Fine Art Galleries',
                        'Please locate your gallery of interest below for hours of operation.',
                        ' ',
                    ],

                    galleries: [
                        {noteAtEnd: true, name: 'Aspen', lines: ['Monday  10am - 8pm', 'Tuesday - Friday  10am - 10pm', 'Saturday  9am - 10pm', 'Note: Hours may vary by season']}
                    ]
                },
            ]
        }
    }
}
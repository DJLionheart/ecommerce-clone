import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './RegPreview.css';

class RegPreview extends Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0
        }
    }

    changePreviewIndex(index) {
        this.setState({
            currentIndex: index
        })
    }
    
    render() {
        const { product } = this.props;
        // const { currentIndex } = this.state

        const slides = product.previewGallery.map( (src, index) => {
            return <Slide key={index} index={index}><section className="carousel_container"><img className="carousel_img" src={ src } alt="product preview"/></section></Slide>
        })

        return(
            <article className="gallery_preview">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={ product.previewGallery.length }
                >
                    <Slider>
                        { slides }
                    </Slider>

                </CarouselProvider>
            </article>
        )
    }
}

export default RegPreview;
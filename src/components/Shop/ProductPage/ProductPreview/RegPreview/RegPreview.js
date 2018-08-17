import React, { Component } from 'react';

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
        const { currentIndex } = this.state
        return(
            <article className="gallery_preview">
                <section className="gallery_photo">
                    <img src={ product.previewGallery[currentIndex]} alt="product preview"/>
                </section>
                <nav className="gallery_nav">
                    <ul className="gallery_selector">
                        <li value={0} onClick={ e => this.changePreviewIndex(e.target.value) }>/01</li>
                        <li value={1} onClick={ e => this.changePreviewIndex(e.target.value) }>/02</li>
                        <li value={2} onClick={ e => this.changePreviewIndex(e.target.value) }>/03</li>
                        <li value={3} onClick={ e => this.changePreviewIndex(e.target.value) }>/04</li>
                        <li value={4} onClick={ e => this.changePreviewIndex(e.target.value) }>/05</li>
                        <li value={5} onClick={ e => this.changePreviewIndex(e.target.value) }>/06</li>
                    </ul>

                </nav>
            </article>
        )
    }
}

export default RegPreview;
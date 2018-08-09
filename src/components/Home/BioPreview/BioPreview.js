import React from 'react';

function BioPreview() {
    return(
        <div>
            <h4>PETER LIK, MASTER PHOTOGRAPHER</h4>
            <p>I have dedicated my life to capturing the beauty of Mother Nature</p>
            <p>“Growing up in Australia, I was surrounded by an incredible landscape that captivated. When I was eight, my parents bought me a camera – and after a fateful snapshot of a spider web in the family garden – I was hooked. My travels have taken me to the most amazing locations around the world capturing landscapes that I could only once dream of shooting. I am so grateful for the beauty of this planet and I will never stop sharing it.“</p>
            <button>
                LEARN MORE
                <svg aria-hidden="true" className="btn_right_arrow" viewBox="0 0 22.3 13.7">
                    <path d="M15.6 0l-.7.7 5.5 5.7H0v1h20.4L14.9 13l.7.7 6.7-6.8z">
                    </path>
                </svg>
            </button>
        </div>
    )
}

export default BioPreview;
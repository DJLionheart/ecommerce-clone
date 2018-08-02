import React from 'react';

import './Home.css';

import HomeHeader from './HomeHeader/HomeHeader';
import EotPreview from './EotPreview/EotPreview';
import ArtistPreview from './ArtistPreview/ArtistPreview';

function Home() {
        return(
            <main>
                <HomeHeader/>
                <EotPreview/>
                <ArtistPreview/>
            </main>
        )
}

export default Home;
import React from 'react';

import './Home.css';

import HomeHeader from './HomeHeader/HomeHeader';
import EotPreview from './EotPreview/EotPreview';
import ArtistPreview from './ArtistPreview/ArtistPreview';
import CollSlider from './CollSlider/CollSlider';
import CollSpotlight from './CollSpotlight/CollSpotlight';
import BioPreview from './BioPreview/BioPreview';

import { Architecture } from '../Shop/collections/collection_data';

function Home() {
        return(
            <main>
                <HomeHeader/>
                <EotPreview/>
                <ArtistPreview/>
                <CollSlider/>
                <CollSpotlight collection={ Architecture }/>
                <BioPreview/>
            </main>
        )
}

export default Home;
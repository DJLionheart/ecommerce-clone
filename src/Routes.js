import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Gallery from './components/pages/Gallery/Gallery';
import Biography from './components/pages/Biography/Biography';
import Awards from './components/pages/Awards/Awards';
import Media from './components/pages/Media/Media';
import Contact from './components/pages/Contact/Contact'
import ProductPage from './components/Shop/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';
import Account from './components/user/Account/Account';
import Addresses from './components/user/Addresses/Addresses';
import Wishlist from './components/user/Wishlist/Wishlist';
import Register from './components/user/Register/Register';
import Login from './components/user/Login/Login';
import FAQ from './components/pages/FAQ/FAQ';
import HangingIns from './components/pages/HangingIns/HangingIns';
import CareHandling from './components/pages/CareHandling/CareHandling';
import PrivacyPolicy from './components/pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './components/pages/TermsOfUse/TermsOfUse';
import TermsOfSale from './components/pages/TermsOfSale/TermsOfSale';
import Inspiration from './components/pages/Inspiration/Inspiration';
import Process from './components/pages/Process/Process';
import Careers from './components/pages/Careers/Careers';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost/BlogPost';

function Routes(props) {
    return(
        <main className="app_body" onClick={ props.closeDropdown }>
        <Route exact path="/" component={ Home }/>
          <Route path="/collections/:collectionPath" component={ Shop }/>
          <Route path="/pages/galleries/:galleryName" component={ Gallery }/>
          <Route path="/cart" component={ Cart }/>
          <Route path="/wishlist" component={ Wishlist }/>
          <Route exact path="/account" component={ Account }/>
          <Route path="/account/register" component={ Register }/>
          <Route path="/account/login" component={ Login }/>
          <Route path="/account/addresses" component={ Addresses }/>
          <Route path="/pages/biography" component={ Biography }/>
          <Route path="/pages/awards" component={ Awards }/>
          <Route path="/pages/media" component={ Media }/>
          <Route path="/pages/contact-us" component={ Contact }/>
          <Route path="/pages/faq" component={ FAQ }/>
          <Route path="/pages/hanging-instructions" component={ HangingIns }/>
          <Route path="/pages/care-handling" component={ CareHandling }/>
          <Route path="/pages/privacy-policy" component={ PrivacyPolicy }/>
          <Route path="/pages/terms-of-use" component={ TermsOfUse }/>
          <Route path="/pages/terms-of-sale" component={ TermsOfSale }/>
          <Route path="/pages/inspiration" component={ Inspiration }/>
          <Route path="/pages/process" component={ Process }/>
          <Route path="/pages/careers" component={ Careers }/>
          <Route path="/blogs/journal" component={ Blog }/>
          <Route path="/blogs/journal/:postPath" component={ BlogPost }/>
          <Route path="/products/:productName" component={ ProductPage }/>
          <Footer/>
        </main>
    )
}

export default Routes;
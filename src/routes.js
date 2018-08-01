import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Biography from './components/Artist/Biography/Biography';
import Awards from './components/Artist/Awards/Awards';
import Media from './components/Artist/Media/Media';

export default(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/collections" component={Shop}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/pages/biography" component={Biography}/>
        <Route path="/pages/awards" component={Awards}/>
        <Route path="/pages/media" component={Media}/>
    </Switch>
)

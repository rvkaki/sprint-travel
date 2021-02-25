import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Checkout from '../views/Checkout';
import Contacts from '../views/Contacts';
import Franchising from '../views/Franchising';
import Home from '../views/Home';
import Offer from '../views/Offer';
import Offers from '../views/Offers';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/ofertas">
          <Offers />
        </Route>
        <Route exact path="/ofertas/:id">
          <Offer />
        </Route>
        <Route exact path="/franchising">
          <Franchising />
        </Route>
        <Route exact path="/contactos">
          <Contacts />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;

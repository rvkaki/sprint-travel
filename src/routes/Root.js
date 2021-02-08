import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Franchising from '../views/Franchising';
import Home from '../views/Home';
import Offer from '../views/Offer';
import Offers from '../views/Offers';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/ofertas">
          <Offers />
        </Route>
        <Route exact path="/ofertas/:id">
          <Offer />
        </Route>
        <Route exact path="/franchising">
          <Franchising />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;

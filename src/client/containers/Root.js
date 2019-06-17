import React, { useEffect, useState } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import wC from 'client/containers/withContent';
import NavBar from 'client/containers/NavBar/NavBar';
import Footer from 'client/containers/Footer/Footer';

import Home from 'client/pages/Home';
import NotFound from 'client/pages/NotFound';

import FullScreenLoader from 'client/components/FullScreenLoader/FullScreenLoader';

import 'client/swiss';

function Root(props) {
  return (
    <div className="app">
      <NavBar />
      <main className="content">
        <Switch>
          <Route exact path="/" component={wC(Home)} />
          <Route component={wC(NotFound)} />
        </Switch>
      </main>
      <FullScreenLoader />
    </div>
  );
}

export default withRouter(Root);

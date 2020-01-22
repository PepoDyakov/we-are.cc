import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import wC from 'client/containers/withContent';
import NavBar from 'client/containers/NavBar/NavBar';
import Footer from 'client/containers/Footer/Footer';

import Home from 'client/pages/Home';
import NotFound from 'client/pages/NotFound';

import 'client/swiss';

function Root(props) {
  const navTitle = props.navBar.get('title');
  const navText = props.navBar.get('smallText');
  const list = props.navBar.getIn(['config', 'list']);
  const logo = props.navBar.getIn(['logo', 'fields', 'file', 'url']);
  return (
    <div className="app">
      <NavBar title={navTitle} list={list} />
      <main className="content">
        <Switch>
          <Route exact path="/" component={wC(Home)} />
          <Route component={wC(NotFound)} />
        </Switch>
      </main>
      <Footer title={navTitle} subText={navText} list={list} logo={logo} />
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    navBar: state.getIn(['navBar', 'fields']),
  };
};

export default withRouter(connect(mapStateToProps, null)(Root));

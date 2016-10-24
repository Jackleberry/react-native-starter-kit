import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import LoginNav from './login/LoginNav';
import IntroPage from './IntroPage';
import LandingPage from './LandingPage';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    if (!this.props.auth.checkedCredentials) {
      return <IntroPage />
    } else if (this.props.auth.isAuthenticated) {
      return (<LandingPage />);
    } else {
      return (<LoginNav />);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);

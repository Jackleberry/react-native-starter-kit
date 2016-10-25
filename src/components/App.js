import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import LoginNav from './login/LoginNav';
import IntroPage from './IntroPage';
import LandingNav from './landing/LandingNav';

class App extends Component {

  render() {
    console.log("is authenticated?", this.props.auth.isAuthenticated);
    if (!this.props.auth.checkedCredentials) {
      return <IntroPage />
    } else if (this.props.auth.isAuthenticated) {
      return (<LandingNav />);
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

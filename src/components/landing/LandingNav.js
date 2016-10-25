import React, { Component } from 'react';
import { Navigator } from 'react-native';
import LandingPage from './LandingPage';
import navigationBar from 'HSNavBar'

const initialRoute = {component: LandingPage, name: 'landing', title: 'Landing'};

class LandingNav extends Component {

  constructor () {
    super();
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene (route, navigator) {
    return (
      <route.component navigator={navigator} {...route.passProps} />
    );
  }

  render () {
    return (
      <Navigator
        navigationBar={navigationBar()}
        initialRoute={initialRoute}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.FloatFromRight}/>
    )
  }
}

export default LandingNav

import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import { Button } from 'react-native-elements'
import mainStyles from '../../styles/styles';
import Heading from '../common/Heading';
import FBLogin from './FBLogin';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

class Login extends Component {

  navigate(component, title) {
    this.props.navigator.push({
      component: component,
      title: title
    });
  }

  render() {
    return (
        <View style={[mainStyles.containerWithNav]}>
            <FBLogin/>
            <Button
              small
              onPress={this.navigate.bind(this)}
              icon={{name: 'facebook', type: 'font-awesome'}}
              buttonStyle={{borderRadius: 5, marginTop: 15, backgroundColor: socialColors.facebook}}
              title='Sign In With Facebook' />
            <Button
              small
              icon={{name: 'at', type: 'font-awesome'}}
              onPress={this.navigate.bind(this, LoginForm, "Login")}
              buttonStyle={{borderRadius: 5, marginTop: 15, backgroundColor: colors.secondary2}}
              title='Sign In With Email' />
            <Button
              small
              onPress={this.navigate.bind(this, SignupForm, "Sign Up")}
              buttonStyle={{borderRadius: 5, marginTop: 15, borderWidth: 0.2,
                borderColor: colors.grey2, backgroundColor: 'transparent'}}
              textStyle={{color: colors.secondary2}}
              title="Don't have an account? Sign Up Here." />
        </View>

    );
  }
}

export default Login;

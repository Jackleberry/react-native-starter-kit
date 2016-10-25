import React, { Component } from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import colors from 'HSColors'
import { Button } from 'react-native-elements'
import mainStyles from '../../styles/styles';
import Heading from '../common/Heading';
import FBLogin from './FBLogin';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';

class Login extends Component {

  navigate(component, title) {
    this.props.navigator.push({
      component: component,
      title: title
    });
  }

  render() {
    return (
      <View style={[mainStyles.allowForNav, styles.container]}>
        <Heading/>
        <FBLogin/>
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
        {this.props.auth.isAuthenticating &&
        <ActivityIndicator size="large" color={colors.secondary2} style={{padding: 10}} />}
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
});

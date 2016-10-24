import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import colors from 'HSColors'
import mainStyles from '../../styles/styles';
import { Button, FormInput } from 'react-native-elements'
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';
import ValidateInput from '../../validations/signup';
import ErrorModal from '../common/ErrorModal';
import isEmpty from 'lodash/isEmpty';

class FormLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: []
    };
  }

  onUsernameChangeText(username){
    this.setState({ username })
  }

  onEmailChangeText(email){
    this.setState({ email })
  }


  onPasswordChangeText(password){
    this.setState({ password })
  }

  onConfirmPasswordChangeText(passwordConfirmation){
    this.setState({ passwordConfirmation })
  }

  isValid() {
    const {errors, isValid} = ValidateInput(this.state);

    if (!isValid) {
      console.log('is not valid');
      this.setState({errors});
    }

    return isValid;
  }

  onSubmit() {
    if (this.isValid()) {
      this.props.signup(this.state).then(
        res => {console.log('success')},
        err => {console.log('failure')}
      );
    }
  }

  render() {
    return (
      <View style={[mainStyles.containerWithNav]}>
        <View style={styles.formContainer}>
          <ErrorModal
            onClose={() => this.setState({ errors: [] })}
            content={this.state.errors}
            visible={!isEmpty(this.state.errors)}
          />
          <FormInput
            containerStyle={styles.formInput}
            onChangeText={this.onUsernameChangeText.bind(this)}
            placeholder='Username' />
          <FormInput
            containerStyle={styles.formInput}
            onChangeText={this.onEmailChangeText.bind(this)}
            placeholder='Email' />
          <FormInput
            containerStyle={styles.formInput}
            onChangeText={this.onPasswordChangeText.bind(this)}
            placeholder='Password'
            secureTextEntry={true}/>
          <FormInput
            containerStyle={styles.formInput}
            onChangeText={this.onConfirmPasswordChangeText.bind(this)}
            placeholder='Confirm Password'
            secureTextEntry={true}/>
          <Button
            small
            onPress={this.onSubmit.bind(this)}
            buttonStyle={styles.signupButton}
            title='Sign up' />
        </View>
      </View>
    );
  }
}

export default connect(null, { signup })(FormLogin);

const styles = StyleSheet.create({
  formContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  formInput: {
    paddingTop: 20
  },
  signupButton: {
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: colors.secondary2
  }
});

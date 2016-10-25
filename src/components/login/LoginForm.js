import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, Modal, TouchableHighlight } from 'react-native';
import colors from 'HSColors';
import mainStyles from '../../styles/styles';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import ValidateInput from '../../validations/login';
import isEmpty from 'lodash/isEmpty';
import ErrorModal from '../common/ErrorModal';
import SpecialFormInput from '../common/SpecialFormInput';

class FormLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: []
    };
  }

  onUsernameChangeText(identifier){
    this.setState({ identifier })
  }

  onPasswordChangeText(password){
    this.setState({ password })
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
      this.props.login(this.state).then(
        res => {console.log('Login Success')},
        err => {
          console.log('Login Failure');
          this.setState({ errors: err });
        }
      );
    } else {
      console.log(this.state.errors);
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

          <SpecialFormInput
            containerStyle={styles.formInput}
            onChangeText={this.onUsernameChangeText.bind(this)}
            placeholder='Username / Email'
            iconName="user"/>
          <SpecialFormInput
            containerStyle={styles.formInput}
            onChangeText={this.onPasswordChangeText.bind(this)}
            placeholder='Password'
            secureTextEntry={true}
            iconName="lock"/>
          <Button
            small
            onPress={this.onSubmit.bind(this)}
            buttonStyle={styles.signupButton}
            title='Login' />
        </View>
      </View>
    );
  }
}

export default connect(null, { login })(FormLogin);

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
  },
  modalContainer: {
    backgroundColor: colors.grey1,
    opacity: 0.5
  },
  modalContent: {
    borderRadius: 5,
    width: 200,
    height: 100,
    backgroundColor: 'white'
  }
});

import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, Modal, TouchableHighlight } from 'react-native';
import colors from 'HSColors'
import mainStyles from '../../styles/styles';
import { Icon } from 'react-native-elements'
import { Button, FormInput } from 'react-native-elements'
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';
import ValidateInput from '../../validations/login';
import isEmpty from 'lodash/isEmpty';
import ErrorModal from '../common/ErrorModal';

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
      this.props.signup(this.state).then(
        res => {console.log('success')},
        err => {console.log('failure')}
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

          <FormInput
            containerStyle={styles.formInput}
            onChangeText={this.onUsernameChangeText.bind(this)}
            placeholder='Username / Email' />
          <FormInput
            containerStyle={styles.formInput}
            onChangeText={this.onPasswordChangeText.bind(this)}
            placeholder='Password'
            secureTextEntry={true}/>
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

import React, {Component, PropTypes} from 'react';
const FBSDK = require('react-native-fbsdk');
const { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } = FBSDK;
import { Button } from 'react-native-elements'
import socialColors from 'HSSocialColors'
import { facebookLogin, setAuthenticating } from '../../actions/auth';
import { connect } from 'react-redux';

class FBLogin extends Component {

  fbLogin() {
    this.props.setAuthenticating(true);
    let _this = this;
    LoginManager.logInWithReadPermissions(['email']).then(
      function(result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          // _this.props.setAuthenticating(true);
          console.log('Login success with permissions: ' + result.grantedPermissions.toString());
          console.log(result);
          AccessToken.getCurrentAccessToken().then(
            ({accessToken, userID}) => {
              console.log(accessToken.toString());
              console.log(userID);

              console.log('making graph request');
              const infoRequest = new GraphRequest(
                '/me',
                {
                  parameters: {
                    fields: {
                      string: 'email,name'
                    }
                  }
                },
                (error, result) => {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log(result);
                    _this.props.facebookLogin(result).catch(err => {

                    });
                  }
                },
              );
              // Start the graph request.
              new GraphRequestManager().addRequest(infoRequest).start();
            }
          )
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
      }
    );
  }

  render() {
    return (
      <Button
        small
        onPress={this.fbLogin.bind(this)}
        icon={{name: 'facebook', type: 'font-awesome'}}
        buttonStyle={{borderRadius: 5, marginTop: 15, backgroundColor: socialColors.facebook}}
        title='Sign In With Facebook' />
    );
  }
}

export default connect(null, { facebookLogin, setAuthenticating })(FBLogin);

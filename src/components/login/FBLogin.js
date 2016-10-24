import React, {Component, PropTypes} from 'react';
const FBSDK = require('react-native-fbsdk');
const { LoginButton, AccessToken } = FBSDK;

class FBLogin extends Component {

  render() {
    return (
      <LoginButton
        readPermissions={["email"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  alert(data.accessToken.toString())
                }
              )
            }
          }
        }
        onLogoutFinished={() => alert("logout.")}/>
    );
  }
}

export default FBLogin;

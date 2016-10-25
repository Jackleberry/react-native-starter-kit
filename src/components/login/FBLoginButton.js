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
              console.log("login has error: ");
              console.log(error);
              console.log(result);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  console.log(data.accessToken.toString());
                  console.log(data);
                  console.log(result);
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

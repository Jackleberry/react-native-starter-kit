import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// import jwt from 'react-native-jwt';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/auth';

export default function init() {

  const store = configureStore();

  class StarterKit extends Component {

    componentWillMount() {
      setTimeout(() => AsyncStorage.getItem('@StarterKit:jwtToken').then(value => {
        console.log("Did I find jwt token? ", value);
        if (value) {
          // store.dispatch(setCurrentUser(jwt.decode(value)));
          store.dispatch(setCurrentUser({
            name: "Fake user",
            email: "Fake email"
          }));
          setAuthorizationToken(value);
        } else {
          store.dispatch(setCurrentUser({}));
          setAuthorizationToken(false);
        }
      }), 10);
    }

    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }


  AppRegistry.registerComponent('StarterKit', () => StarterKit);
}

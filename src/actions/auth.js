import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
// import jwt from 'jsonwebtoken';
import * as types from './types';
import { AsyncStorage } from 'react-native';

// const url = "https://pure-crag-60488.herokuapp.com/api/auth";
const url = "http://localhost:3002/api/mobile";

export function login(data) {
  return dispatch => {
//    return axios.post(`${url}/auth`, data).then(res => {
    console.log(data);
    return axios.post(`${url}/auth`, data).then(
      res => {
        const { token, username, email, id } = res.data;
        console.log("Setting token in async Storage: ", token);
        AsyncStorage.setItem("@StarterKit:jwtToken", token);
        setAuthorizationToken(token);
        // dispatch(setCurrentUser(jwt.decode(token)));
        dispatch(setCurrentUser({
          name: username,
          email
        }));
      }
    ).catch(
      err => {
        if (err.response) {
          if (err.response.status == 401) {
            throw(err.response.data.errors);
          }
        }

        throw(["Failed to Login. " + err.toString()]);
      }
    );
  };
}

export function facebookLogin(data) {
  return dispatch => {
    return axios.post(`${url}/auth/facebook`, data).then(
      res => {
        const { token, username, email, name } = res.data;
        console.log("Setting token in async Storage: ", token);
        AsyncStorage.setItem("@StarterKit:jwtToken", token);
        setAuthorizationToken(token);
        // dispatch(setCurrentUser(jwt.decode(token)));
        dispatch(setCurrentUser({
          name: name || username,
          email
        }));
      }
    ).catch(
      err => {
        console.log(err);
        if (err.response) {
          if (err.response.status == 401) {
            throw(err.response.data.errors);
          }
        }

        throw(["Failed to Login. " + err]);
      }
    );
  };
}

export function signup(data) {
  return dispatch => {
    console.log(data);
    return axios.post(`${url}/users`, { user: data }).then(
      res => {
        const { token, username, email, id } = res.data;
        console.log("Saving token: ", token);
        AsyncStorage.setItem("@StarterKit:jwtToken", token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser({
          name: username,
          email
        }));
      }
    ).catch(
      err => {
        console.log("Received failure: ", err);
        if (err.response) {
          if (err.response.status == 500) {
            throw([err.response.data.error]);
          } else if (err.response.status == 400) {
            throw(err.response.data.errors);
          }
        } else {
          throw(["Failed to Signup. " + err]);
        }
      }
    );
  };
}

export function logout() {
  return dispatch => {
    AsyncStorage.removeItem("@StarterKit:jwtToken");
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    user
  };
}

export function setAuthenticating(isAuthenticating) {
  return {
    type: types.SET_AUTHENTICATING,
    isAuthenticating
  };
}

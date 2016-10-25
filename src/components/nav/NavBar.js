/**
 * @providesModule HSNavBar
 */

import React from 'react';
import { View, Platform, Navigator, StyleSheet, TouchableHighlight } from 'react-native';
import NavTitleComponent from 'HSNavTitleComponent';
import NavTitleIcon from 'HSNavTitleIcon';
import colors from 'HSColors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'react-native-elements'

import CancelButton from 'HSCancelButton';
import { SearchBar } from 'react-native-elements';
import HSStyles from 'HSStyles';

let styles = {};

const NavigationBar = (toggleSideMenu) => {
  const src = require('image!logo')
  const LeftButton = (route, navigator, index, navState) => {
    if (route.name === 'landing') {
      return (
        <TouchableHighlight
          style={{marginTop: 7, marginLeft: 9}}
          onPress={toggleSideMenu}
          underlayColor='transparent'>
          <MaterialIcon
            color='white'
            name='menu'
            size={28}
          />
        </TouchableHighlight>
      );
    } else if (route.name !== 'initial') {
      return (
        <CancelButton onPress={() => {
          navigator.pop();
        }}/>
      );
    } else {
      return null;
    }
    if (index > 0) {
      const leftAction = navigator.pop;
      const leftIcon = 'chevron-left';
      return (
        <MaterialIcon
          onPress={leftAction}
          name={leftIcon} size={28} />
      )
    }
  };

  const RightButton = (route, navigator, index, navState) => {
    if (route.name === 'landing') {
      return (
        <Icon
          onPress={() => console.log("cog pressed")}
          type="font-awesome"
          containerStyle={{padding: 7}}
          name="cogs"
          color="white"
          underlayColor='transparent'/>
      );
    } else {
      return null;
    }
  };

  const Title = (route, navigator, index, navState) => {
    if (route.title) {
      return (
        <NavTitleComponent title={route.title} />
      )
    }
    return (
      <NavTitleIcon src={src} />
    )
  };

  return (
    <Navigator.NavigationBar
      routeMapper={{
        LeftButton,
        RightButton,
        Title
      }}
      style={styles.navBar}
    />
  )
};

styles = StyleSheet.create({
  navBar: {
    height: 65,
    backgroundColor: colors.grey1,
    ...Platform.select({
      android: {
        height: 55
      }
    })
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 10,
    ...Platform.select({
      android: {
        marginTop: 15
      }
    })
  }
});

export default NavigationBar;

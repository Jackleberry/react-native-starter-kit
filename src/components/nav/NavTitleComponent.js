/**
 * @providesModule HSNavTitleComponent
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'HSColors';
import HSStyles from 'HSStyles';

const NavTitleComponent = ({title}) => (
  <View style={[HSStyles.container]}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default NavTitleComponent;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: colors.secondary2
  }
});

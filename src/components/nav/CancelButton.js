/**
 * @providesModule HSCancelButton
 */

import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import HSStyles from 'HSStyles';

const CancelButton = ({onPress}) => (
  <TouchableHighlight onPress={onPress} style={[HSStyles.container, styles.container]}>
    <Text style={styles.cancel}>Cancel</Text>
  </TouchableHighlight>
);

export default CancelButton;

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  cancel: {
    color: 'white'
  }
});

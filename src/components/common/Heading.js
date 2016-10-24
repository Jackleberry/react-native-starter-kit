import React, {Component, PropTypes} from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'
import colors from 'HSColors'

class Heading extends Component {

  render() {
    return (
      <View style={styles.headingContainer}>
        <Icon color='white' type="font-awesome" name='bicycle' size={62} />
        <Text style={styles.heading}>Starter Kit</Text>
      </View>
    );
  }
}

export default Heading;

const styles = StyleSheet.create({
  headingContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary2
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
});

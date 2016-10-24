import React, {Component, PropTypes} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HSStyles from 'HSStyles';
import colors from 'HSColors';
import { Icon } from 'react-native-elements'

class LandingPage extends Component {

  render() {
    return (
      <View style={[HSStyles.container, styles.container]}>
        <Icon color='white' type="font-awesome" name='bicycle' size={62} />
        <Text style={HSStyles.heading}>Home</Text>
      </View>
    );
  }
}

export default LandingPage;


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary2
  }
});

import React, {Component, PropTypes} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HSStyles from 'HSStyles';
import colors from 'HSColors';
import { Icon } from 'react-native-elements'

class IntroPage extends Component {

  render() {
    return (
      <View style={[HSStyles.container, styles.container]}>
        <Icon color='white' type="font-awesome" name='bicycle' size={62} />
        <Text style={HSStyles.heading}>Starter Kit</Text>
      </View>

    );
  }
}

export default IntroPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary2
  }
});

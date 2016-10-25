import React, {Component, PropTypes} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import HSStyles from 'HSStyles';
import colors from 'HSColors';
import { Icon } from 'react-native-elements'

class Authenticating extends Component {

  render() {
    return (
      <ActivityIndicator size="large" color={colors.secondary2} style={{flex: 1}}/>
    );

    return (
      <View style={[HSStyles.container, styles.container]}>
        <Icon color='white' type="font-awesome" name='bicycle' size={62} />
        <Text style={HSStyles.heading}>Authenticating</Text>
        <ActivityIndicator size="large" color={colors.secondary2}/>
      </View>

    );
  }
}

export default Authenticating;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary2
  }
});

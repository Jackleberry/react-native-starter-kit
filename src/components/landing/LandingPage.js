import React, {Component, PropTypes} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HSStyles from 'HSStyles';
import colors from 'HSColors';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { Button } from 'react-native-elements';

class LandingPage extends Component {

  render() {
    return (
      <View style={[HSStyles.container, styles.container]}>
        <Icon color='white' type="font-awesome" name='bicycle' size={62} />
        <Text style={HSStyles.heading}>Home</Text>
        <Text style={HSStyles.text}>Welcome {this.props.user.name}!</Text>
        <Button
          small
          onPress={this.props.logout}
          buttonStyle={{borderRadius: 5, marginTop: 15, width: 200, borderWidth: 0.2,
            borderColor: colors.grey1, backgroundColor: colors.secondary4, opacity: 0.5}}
          textStyle={{color: colors.white}}
          title="Logout" />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { logout })(LandingPage);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary2
  }
});

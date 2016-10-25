/**
 * @providesModule HSStyles
 */

import { StyleSheet } from 'react-native';
import colors from 'HSColors'

const styles = StyleSheet.create({
  quickBackgroundColor: {
    backgroundColor: 'lightblue'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  allowForNav: {
    marginTop: 60
  },
  containerWithNav: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 60
  },
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
  text: {
    color: 'white'
  }
});

export default styles;

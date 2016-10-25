import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import mainStyles from '../../styles/styles';
import { Icon } from 'react-native-elements'

class MyModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.props.visible}>
          <TouchableOpacity
            onPress={this.props.onClose}
            style={[mainStyles.container, styles.modalContainer]}>
            <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.close}>
                <Icon
                  name='ios-close-circle'
                  type='ionicon'
                  color='#00B233'
                  underlayColor='transparent'
                  onPress={this.props.onClose}
                />
              </View>
              <View style={styles.content}>
                {this.props.content.map((err, index) => <Text key={index}>* {err}</Text>)}
              </View>
            </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
    );
  }
}

export default MyModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 0,
    marginTop: 20
  },
  close: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -8,
    marginRight: -14
  },
  content: {
    flex: 1
  }
});

import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Platform } from 'react-native';
import { Icon } from 'react-native-elements'
import colors from 'HSColors';

class SpecialFormInput extends Component {
  render () {
    const {
      containerStyle,
      inputStyle,
      value,
      autoCapitalize,
      autoCorrect,
      autoFocus,
      blurOnSubmit,
      defaultValue,
      editable,
      keyboardType,
      maxLength,
      multiline,
      onBlur,
      onChange,
      onChangeText,
      onContentSizeChange,
      onEndEditing,
      onFocus,
      onLayout,
      onSelectionChange,
      onSubmitEditing,
      placeholder,
      placeholderTextColor,
      returnKeyType,
      secureTextEntry,
      selectTextOnFocus,
      selectionColor,
      inlineImageLeft,
      inlineImagePadding,
      numberOfLines,
      returnKeyLabel,
      underlineColorAndroid,
      clearButtonMode,
      clearTextOnFocus,
      dataDetectorTypes,
      enablesReturnKeyAutomatically,
      keyboardAppearance,
      onKeyPress,
      selectionState,
      textInputRef,
      containerRef,
      iconName
    } = this.props;
    return (
      <View ref={containerRef} style={[styles.container, containerStyle && containerStyle]}>
          <Icon color={colors.grey4} type="font-awesome" name={iconName} size={14} style={styles.icon} />
          <TextInput
            ref={textInputRef}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            autoFocus={autoFocus}
            blurOnSubmit={blurOnSubmit}
            defaultValue={defaultValue}
            keyboardType={keyboardType}
            maxLength={maxLength}
            multiline={multiline}
            onBlur={onBlur}
            onChange={onChange}
            onChangeText={onChangeText}
            onContentSizeChange={onContentSizeChange}
            onEndEditing={onEndEditing}
            onFocus={onFocus}
            onLayout={onLayout}
            onSelectionChange={onSelectionChange}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            returnKeyType={returnKeyType}
            secureTextEntry={secureTextEntry}
            selectTextOnFocus={selectTextOnFocus}
            inlineImageLeft={inlineImageLeft}
            inlineImagePadding={inlineImagePadding}
            numberOfLines={numberOfLines}
            returnKeyLabel={returnKeyLabel}
            underlineColorAndroid={underlineColorAndroid}
            clearButtonMode={clearButtonMode}
            clearTextOnFocus={clearTextOnFocus}
            dataDetectorTypes={dataDetectorTypes}
            enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
            keyboardAppearance={keyboardAppearance}
            onKeyPress={onKeyPress}
            selectionState={selectionState}
            editable={editable}
            selectionColor={selectionColor || colors.grey3}
            value={value}
            style={[styles.input, inputStyle && inputStyle]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    ...Platform.select({
      ios: {
        borderBottomColor: colors.grey4,
        borderBottomWidth: 1,
        marginLeft: 20,
        marginRight: 20
      }
    })
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    height: 36,
    color: colors.grey3,
    fontSize: 14
  },
  icon: {
    flex: 1
  }
});

export default SpecialFormInput

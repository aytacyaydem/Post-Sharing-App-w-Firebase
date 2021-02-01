import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {custom_button_styles} from '../styles/component_styles';

function CustomButton({title, color, onClick, ...restProps}) {
  return (
    <View {...restProps}>
      <TouchableOpacity
        style={[
          custom_button_styles.buttonContainer,
          {backgroundColor: color ? color : '#5472d3'},
        ]}
        onPress={onClick}>
        <Text style={custom_button_styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export {CustomButton};

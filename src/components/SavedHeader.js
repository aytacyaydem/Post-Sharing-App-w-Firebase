import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {saved_header_style} from '../styles/component_styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
function SavedHeader() {
  return (
    <View style={saved_header_style.container}>
      <Text style={saved_header_style.text}>Yer İşaretleri</Text>
    </View>
  );
}
export {SavedHeader};

import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {posts_header_style} from '../styles/component_styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
function PostsHeader() {
  return (
    <View style={posts_header_style.container}>
      <Text style={posts_header_style.text}>Timeline</Text>
      <TouchableOpacity onPress={() => auth().signOut()}>
        <Icon name="exit-to-app" color="black" size={25} />
      </TouchableOpacity>
    </View>
  );
}
export {PostsHeader};

import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {posts_header_style} from '../styles/component_styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
function PostsHeader() {
  return (
    <View style={posts_header_style.container}>
      <Icon name="artstation" size={30} color={"white"}/>
      <TouchableOpacity onPress={() => auth().signOut()}>
        <Icon name="exit-to-app" color="#ffffff" size={28} />
      </TouchableOpacity>
    </View>
  );
}
export {PostsHeader};

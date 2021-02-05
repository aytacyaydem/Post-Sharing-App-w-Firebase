import {TextInput} from 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {posts_input_style} from '../styles/component_styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function PostsInput({onAdd}) {
  const [text, setText] = useState('');

  return (
    <View style={posts_input_style.container}>
      <TextInput
        placeholder="Bir şeyler paylaş"
        style={posts_input_style.input}
        onChangeText={(val) => setText(val)}
        multiline
      />
      <TouchableOpacity
        style={posts_input_style.sendIcon}
        onPress={() => {
          onAdd(text);
          setText("");
        }}>
        <Icon name="send" size={28} color="#0d47a1" />
      </TouchableOpacity>
    </View>
  );
}
export {PostsInput};

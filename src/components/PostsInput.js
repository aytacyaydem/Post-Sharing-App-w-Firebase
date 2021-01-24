import {TextInput} from 'react-native-gesture-handler';

import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {posts_input_style} from '../styles/component_styles';
import { useLinkProps } from '@react-navigation/native';

function PostsInput({onAdd}) {
  const [text, setText] = useState('');
  return (
    <View style={posts_input_style.container}>
      <TextInput
        placeholder="Write a post"
        style={posts_input_style.input}
        onChangeText={(val) => setText(val)}
      />
      <Button title="ekle" onPress={() => onAdd(text) }/>
    </View>
  );
}
export {PostsInput};

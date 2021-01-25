import {TextInput} from 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Button,Alert} from 'react-native';
import {posts_input_style} from '../styles/component_styles';
import {CustomButton} from "../components"

function PostsInput({onAdd}) {
  const [text, setText] = useState('');
  return (
    <View style={posts_input_style.container}>
      <TextInput
        placeholder="Write a post"
        style={posts_input_style.input}
        onChangeText={(val) => setText(val)}
      />
      <CustomButton title="Ekle" onClick={() => {
        if(!text) {
          Alert.alert("Uyarı","Lütfen bir değer giriniz")
        }else {
          onAdd(text)
        }
      }} />
    </View>
  );
}
export {PostsInput};

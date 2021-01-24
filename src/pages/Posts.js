import React from 'react';
import {View, Text, FlatList, Button, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import {PostsItem, PostsInput } from '../components';

const temp_data = [
  {id: 0, text: 'Deneme'},
  {id: 1, text: 'Deneme'},
  {id: 2, text: 'Deneme'},
];

// auth().signOut();
function addPost(post) {
    return;
}

const Posts = () => {
  const renderPosts = ({item}) => <PostsItem item={item} />
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={temp_data}
        renderItem={renderPosts}
      />
      <PostsInput onAdd={addPost} />
    </SafeAreaView>
  );
};

export {Posts};

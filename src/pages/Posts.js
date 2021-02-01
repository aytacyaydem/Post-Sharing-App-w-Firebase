import React, {useEffect, useState} from 'react';
import {Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {PostsItem, PostsInput, PostsHeader} from '../components';

const Posts = () => {
  const [postArray, setPostArray] = useState([]);
  const array = [];

  const readData = () => {
    database()
      .ref('posts')
      .orderByChild('createDate')
      .once('value', (snapshot) => {
        snapshot.forEach((snap) => {
          const issue = snap.val();
          array.push(issue);
        });
        setPostArray(array.reverse());
      });
  };
  useEffect(() => {
    readData();
  }, []);

  const renderPosts = ({item}) => <PostsItem item={item} />;

  function addPost(post) {
    database()
      .ref('posts')
      .push({
        text: post,
        userName: auth().currentUser.email.split('@')[0],
        createDate: new Date().toISOString(),
      });
    readData();
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <PostsHeader />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={postArray}
        renderItem={renderPosts}
      />
      <PostsInput onAdd={addPost} />
    </SafeAreaView>
  );
};

export {Posts};

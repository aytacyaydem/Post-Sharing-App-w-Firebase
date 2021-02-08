import React, {useEffect, useState} from 'react';
import {Text, FlatList, SafeAreaView, View} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {PostsItem, PostsInput, PostsHeader} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Posts = () => {
  const [postArray, setPostArray] = useState([]);
  const array = [];

  const readData = () => {
    database()
      .ref('posts')
      .orderByChild('createDate')
      .on('value', (snapshot) => {
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
  const emptyComponent = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24, color: 'gray'}}>Liste Boş</Text>
        <Icon name="information-outline" size={50} color="gray" />
      </View>
    );
  };

  function addPost(post) {
    if(!post) return;
    const newReference = database().ref('posts');
    newReference
      .push({
        id: newReference.key,
        text: post,
        userName: auth().currentUser.email.split('@')[0],
        createDate: new Date().toISOString(),
      })
    readData();
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <PostsHeader />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={postArray}
        renderItem={renderPosts}
        contentContainerStyle={{flexGrow: 1}}
        ListEmptyComponent={emptyComponent}
        showsVerticalScrollIndicator={false}
      />
      <PostsInput onAdd={addPost} />
    </SafeAreaView>
  );
};

export {Posts};

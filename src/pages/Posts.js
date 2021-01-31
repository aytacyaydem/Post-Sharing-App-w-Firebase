import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {PostsItem, PostsInput} from '../components';

// auth().signOut();

const Posts = () => {
  const [postArray, setPostArray] = useState([]);
  const array=[]

  const readData=()=>{
    database()
    .ref('posts')
    .orderByChild('createDate')
    .once('value', (snapshot) => {
      snapshot.forEach((snap) => {
        const issue = snap.val();
        array.push(issue);
      });
      setPostArray(array.reverse());
      // console.log("deneme")
    });
  }
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
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={postArray}
        renderItem={renderPosts}
      />
      <PostsInput onAdd={addPost} />
      <TouchableOpacity
        onPress={() => auth().signOut()}
        style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 17}}>Çıkış Yap</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export {Posts};

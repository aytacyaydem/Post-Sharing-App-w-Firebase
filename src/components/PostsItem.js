import moment from 'moment';
import 'moment/locale/tr';
import React from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {posts_item_style} from '../styles/component_styles';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

moment.locale('tr');

function PostsItem({item, fav}) {
  const createDate = new Date(item.createDate);
  const parsed = moment(createDate);

  function addToFav() {
    const userId = auth().currentUser.uid
    const newRef = database().ref("/fav").child(userId).push()
    if(!item.favId){
      item.favId = newRef.key
      newRef.set(item)
    }
  }
  function removeFromFav() {
    database().ref(`/fav/${auth().currentUser.uid}/${item.favId}`).remove();
    Alert.alert('Mesaj', 'Kayıt silindi.');
    console.log(item.text);
  }

  return (
    <View style={posts_item_style.container}>
      <View style={posts_item_style.header}>
        <Text style={posts_item_style.usernameText}>{item.userName}</Text>
        <Text style={posts_item_style.time}>{parsed.fromNow()}</Text>
      </View>
      <View style={posts_item_style.postContainer}>
        <Text>{item.text}</Text>
        {!fav ? (
          <TouchableOpacity onPress={addToFav}>
            <Icon name="bookmark" color="black" size={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={removeFromFav}>
            <Icon name="trash-can" color="black" size={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export {PostsItem};

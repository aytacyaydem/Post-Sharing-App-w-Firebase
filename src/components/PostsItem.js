import moment from 'moment';
import 'moment/locale/tr';
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {posts_item_style} from '../styles/component_styles';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

moment.locale('tr');

/* 
 {"createDate": "2021-01-25T19:24:24.742Z", "text": "selam23", "userName": "asy"}
*/

function PostsItem({item, fav}) {
  const createDate = new Date(item.createDate);
  const parsed = moment(createDate);

  function addToFav() {
    database()
      .ref('/fav/' + auth().currentUser.uid)
      .push(item);
  }

  return (
    <View style={posts_item_style.container}>
      <View style={posts_item_style.header}>
        <Text style={posts_item_style.usernameText}>{item.userName}</Text>
        <Text>{parsed.fromNow()}</Text>
      </View>
      <View style={posts_item_style.postContainer}>
        <Text>{item.text}</Text>
        {!fav && 
          <TouchableOpacity onPress={addToFav}>
            <Icon name="bookmark" color="black" size={20} />
          </TouchableOpacity>
        }
      </View>
    </View>
  );
}

export {PostsItem};

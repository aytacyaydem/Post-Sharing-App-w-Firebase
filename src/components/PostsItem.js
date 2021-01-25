import moment from 'moment';
import "moment/locale/tr"
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {posts_item_style} from '../styles/component_styles';

moment.locale("tr")


/* 
 {"createDate": "2021-01-25T19:24:24.742Z", "text": "selam23", "userName": "asy"}
*/

function PostsItem({item}) {
  const createDate = new Date(item.createDate)
  const parsed = moment(createDate)
  console.log(parsed.fromNow());

  return (
    <View style={posts_item_style.container}>
      <View style={posts_item_style.header}>
        <Text style={posts_item_style.usernameText}>{item.userName}</Text>
        <Text>{parsed.fromNow()}</Text>
      </View>
      <View style={posts_item_style.postContainer}> 
        <Text>{item.text}</Text>
        <TouchableOpacity>
        <Icon name="bookmark" color="black" size={20} />
        </TouchableOpacity>
       
      </View>
    </View>
  );
}

export {PostsItem};

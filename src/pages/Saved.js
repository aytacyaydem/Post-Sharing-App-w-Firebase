import React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {PostsItem,SavedHeader} from '../components';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Saved = () => {
  const [favArray, setFavArray] = useState([]);
  const readData = () => {
    database()
    .ref('/fav/' + auth().currentUser.uid)
    .on('value', (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        return;
      }   
      setFavArray(Object.values(data));
    });
  };
  const renderFav = ({item}) => <PostsItem item={item} fav />;
  const emptyComponent = () => {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:24,color:"gray"}}>Liste Boş</Text>
        <Icon name="information-outline" size={50} color="gray" />
      </View>
    )
  }

  useEffect(() => {
    readData();
  }, []);

  return (
    <View style={{flex:1}}>
      <SavedHeader />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{flexGrow:1}}
        data={favArray}
        renderItem={renderFav}
        ListEmptyComponent={emptyComponent}
      />
    </View>
  );
};

export {Saved};

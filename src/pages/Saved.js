import React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {PostsItem} from '../components';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

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

  useEffect(() => {
    readData();
  }, []);

  return (
    <View>
      {console.log(favArray)}
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={favArray}
        renderItem={renderFav}
      />
    </View>
  );
};

export {Saved};

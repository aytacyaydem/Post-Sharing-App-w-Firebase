import React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {PostsItem} from '../components';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const Saved = () => {
  const [favArray, setFavArray] = useState([]);
  const renderFav = ({item}) => <PostsItem item={item} fav />;
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

  useEffect(() => {
    readData();
  }, []);

  return (
    <View>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={favArray}
        renderItem={renderFav}
      />
    </View>
  );
};

export {Saved};

import React, {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import {login_page_styles} from '../styles/page_styles';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomButton} from '../components';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPssword] = useState('');
  function signIn() {
    if (email === '') {
      Alert.alert('Uyarı', 'Email alanı boş bırakılamaz');
    } else if (password === '') {
      Alert.alert('Uyarı', 'Password alanı boş bırakılamaz');
    } else if (email && password === '') {
      Alert.alert('Uyarı', 'Email ve password alanı boş bırakılamaz');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(Alert.alert('Mesaj', 'Ana sayfaya yönlendiriliyorsunuz'))
        .catch(({code, message}) => Alert.alert(code, message));
    }
  }
  return (
    <View style={login_page_styles.container}>
      <View style={login_page_styles.formContainer}>
        <Icon
          style={login_page_styles.icon}
          name="artstation"
          size={150}
          color="#5472d3"
        />
        <View style={login_page_styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email Address"
            placeholderTextColor="gray"
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <View style={login_page_styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
            onChangeText={(val) => setPssword(val)}
          />
        </View>
        <CustomButton
          title="Giriş Yap"
          style={{marginHorizontal: 10}}
          onClick={signIn}
        />
        <CustomButton
          title="Kayıt Ol"
          style={{marginHorizontal: 10}}
          color="orange"
          onClick={() => navigation.navigate('Sign')}
        />
      </View>
    </View>
  );
};

export {Login};

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import {login_page_styles} from '../styles/page_styles';
import auth from '@react-native-firebase/auth';


import {CustomButton} from '../components/Button';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPssword] = useState('');
  const [error, setError] = useState({});
  function signIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Home'))
      .catch(({code, message}) => Alert.alert(code, message));

    // .catch(({code}) => {
    //   switch (code) {
    //     case 'auth/no-current-user':
    //       setError('Lütfen ilgili alanları doldurun.');
    //       break;

    //     default:
    //       setError({unexpected: 'Beklenmeyen bir hata oluştu'});
    //       break;
    //   }
    // });
  }
  return (
    <View style={login_page_styles.container}>
      <Text style={login_page_styles.headerText}>Login Screen</Text>
      <View style={login_page_styles.formContainer}>
        {error ? <Text> {Object.values(error)} </Text> : null}
        <View style={login_page_styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email Address"
            placeholderTextColor="black"
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <View style={login_page_styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            placeholderTextColor="black"
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

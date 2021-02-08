import React, {useState} from 'react';
import {View, TextInput, Alert} from 'react-native';
import {login_page_styles} from '../styles/page_styles';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomButton} from '../components';
import LottieView from "lottie-react-native";
import wait from "waait";

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPssword] = useState('');
  const [loading, setLoading] = useState(false);
  
  async function signIn() {
    setLoading(true)
    await wait(3000);
    if (email === '') {
      Alert.alert('Uyarı', 'Email alanı boş bırakılamaz');
    } else if (password === '') {
      Alert.alert('Uyarı', 'Password alanı boş bırakılamaz');
    } else if (email && password === '') {
      Alert.alert('Uyarı', 'Email ve password alanı boş bırakılamaz');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => console.log("Signed In"))
        .catch(({code, message}) => Alert.alert(code, message));
        setLoading(false)
    }
  }

  if (loading) {
    return (
      <View style={login_page_styles.loadingContainer}>
      <LottieView source={require("../assets/loading.json")} autoPlay loop />
      </View>
    )
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

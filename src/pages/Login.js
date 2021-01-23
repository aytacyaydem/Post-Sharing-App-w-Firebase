import React from 'react'
import { View, Text,Button,TextInput,TouchableOpacity } from 'react-native'
import {login_page_styles} from "../styles/page_styles"

//Components
import {CustomButton} from "../components/Button"

const Login = ({navigation}) => {
    return (
        <View style={login_page_styles.container}>
            <Text style={login_page_styles.headerText}>Login Screen</Text>
            <View style={login_page_styles.formContainer}>
            <View style={login_page_styles.inputContainer}>
            <TextInput autoCapitalize="none" autoCorrect={false} placeholder="Email Address" placeholderTextColor="black"/>
            </View>
            <View style={login_page_styles.inputContainer}>
            <TextInput autoCapitalize="none" autoCorrect={false} placeholder="Password" placeholderTextColor="black" secureTextEntry/>
            </View>
            <CustomButton title="Giriş Yap" style={{marginHorizontal:10}}/>
            <CustomButton title="Kayıt Ol" style={{marginHorizontal:10}} color="orange" onClick={() => navigation.navigate("Sign")}/>
            </View>
        </View>
    )
}

export {Login}

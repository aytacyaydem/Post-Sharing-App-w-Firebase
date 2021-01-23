import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
function AuthStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" />
            <Stack.Screen name="Sign"/>
            <Stack.Screen name="Home" component={Router}/>

        </Stack.Navigator>
    )   
}
function Router() {
    return(
    <NavigationContainer>
        <Tab.Navigator>
            <Stack.Screen name="Auth" component={AuthStack}/>
            <Stack.Screen name="Todo" component={Posts}/>
        </Tab.Navigator>
    </NavigationContainer>
    );
}
export default Router;
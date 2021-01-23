import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Login,Register,Saved,Posts} from "./pages"

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator()
function AfterLogin() {
    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name="Posts" component={Posts}/>
            <BottomTab.Screen name="Saved" component={Saved} />
        </BottomTab.Navigator>
    )   
}


function Router() {
    return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Sign" component={Register} />
            <Stack.Screen name="Home" component={AfterLogin} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}
export default Router;


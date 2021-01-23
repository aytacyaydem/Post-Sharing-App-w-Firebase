import React, {useState} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login, Register, Saved, Posts} from './pages';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

auth().signOut();

function AfterLogin() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Posts" component={Posts} />
      <BottomTab.Screen name="Saved" component={Saved} />
    </BottomTab.Navigator>
  );
}
function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={AfterLogin} />
    </Stack.Navigator>
  );
}
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign" component={Register} />
    </Stack.Navigator>
  );
}
// hasSession ? console.log('1') : console.log('0')

function Router() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <NavigationContainer>
      {/* {console.log(hasSession ? 1 : 0)} */}
      {user ? <Home /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default Router;

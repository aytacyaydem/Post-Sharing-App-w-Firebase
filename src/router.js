import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login, Register, Saved, Posts} from './pages';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function AfterLogin() {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => generateIcon(focused, color, route),
        tabBarLabel: () => null,
      })}
      tabBarOptions={{
        activeTintColor: '#0d47a1',
        inactiveTintColor: 'gray',
      }}>
      <BottomTab.Screen name="Posts" component={Posts} />
      <BottomTab.Screen name="Saved" component={Saved} />
    </BottomTab.Navigator>
  );
}
function Home() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
    <NavigationContainer>{user ? <Home /> : <AuthStack />}</NavigationContainer>
  );
}

export default Router;

function generateIcon(focused, color, route) {
  let iconName;

  switch (route.name) {
    case 'Posts':
      iconName = focused ? 'timeline-text' : 'timeline-text-outline';
      break;
    case 'Saved':
      iconName = focused ? 'content-save-all' : 'content-save-all-outline';
      break;

    default:
      break;
  }

  return <Icon name={iconName} color={color} size={30} />;
}

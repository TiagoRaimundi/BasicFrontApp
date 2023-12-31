import React from 'react';
import { Image, ImageComponent, SafeAreaView } from 'react-native';
import Signin from './src/screens/auth/Signin';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/screens/app/Profile/index';
import Favorites from './src/screens/app/Favorites/index';
import Home from './src/screens/app/Home/Index';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import CreateListin from './src/screens/app/CreateListin';
import MyListings from './src/screens/app/MyListings';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="CreateListing" component={CreateListin} options={{ headerShown: false }} />
      <Stack.Screen name="MyListings" component={MyListings} options={{ headerShown: false }} />

    </Stack.Navigator>

  )


}

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/tabs/home_active.png')
            : require('./src/assets/tabs/home.png');
        } else if (route.name === 'ProfileStack') {
          icon = focused
            ? require('./src/assets/tabs/profile_active.png')
            : require('./src/assets/tabs/profile.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/tabs/bookmarker_active.png')
            : require('./src/assets/tabs/bookmarker.png');
        }
        return <Image style={{ width: 24, height: 24, }} source={icon} />;
      },

      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: colors.lightGrey }
    })}

  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>

)

const App = () => {
  const isSignedIn = true;

  const theme = {
    colors: {
      background: colors.white,
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>

              <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />

            </>

          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}
              />
            </>
          )}

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

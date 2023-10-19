import React from 'react'
import { SafeAreaView } from 'react-native'
import Signin from './src/screens/auth/Signin';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>

      </NavigationContainer>
    
 
  
  );
}

export default App;

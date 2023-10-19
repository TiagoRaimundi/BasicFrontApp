import React, { useEffect } from 'react'
import {SafeAreaView} from 'react-native'
import Splash from './src/screens/auth/Splash'
import Signup from './src/screens/auth/Signup'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const App = () => {
  
  return (
    <SafeAreaView>
      <Signup/>
    </SafeAreaView>

  );
}
export default App;

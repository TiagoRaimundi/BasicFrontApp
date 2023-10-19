import React, { useEffect } from 'react'
import {SafeAreaView} from 'react-native'
import Splash from './src/screens/auth/Splash'
import Signup from './src/screens/auth/Signup'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Signin from './src/screens/auth/Signin';

const Appd = () => {
  
  return (
    <SafeAreaView>
      <Signin  />
    </SafeAreaView>
  );
}

export default Appd;

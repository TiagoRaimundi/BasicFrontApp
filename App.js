import React, { useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { View, Button } from 'react-native';

const App = () => {
  
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1016492994757-n1v181m736ail8469ohi2aujgcdnsimv.apps.googleusercontent.com',
    });
  }, []);

  const sigInWithGoogleAsync = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const user = await auth().signInWithCredential(googleCredential);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title='Sign in with Google'
        onPress={sigInWithGoogleAsync} />
    </View>
  );
}

export default App;
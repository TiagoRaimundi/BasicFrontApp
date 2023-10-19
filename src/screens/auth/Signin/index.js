import React, { useState } from "react";
import { View, Text, ScrollView} from "react-native";
import { styles } from './styles'
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/input";
import Checkbox from "../../../components/Checkbox/Index";
import Button from "../../../components/Button/Index";
import Seperator from "../../../components/Seperator/Index";
import GoogleLogin from "../../../components/GoogleLogin";


const Signin = () => {
    const [checked, setChecked] = useState(false)

    const onSignIn = () => {
        console.log('HELLO')
    }

    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign Up"/>

       
            <Input label="email" placeholder="google@gmail.com"/>
            <Input isPassword label="password" placeholder="............"/>

            <Button style={styles.button} title="Sign In"/>

            <Seperator text="Or sign in with"/>

            <GoogleLogin/>
            
            <Text onPress={onSignIn} style={styles.footerText}>
                Dont't have an account? 
                <Text onPress={onSignIn} style={styles.footerLink}> Sign Up</Text>
            </Text>
            
        </ScrollView>
    );
}
export default Signin;

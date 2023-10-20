import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from './styles'
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/input";
import Button from "../../../components/Button/Index";
import Seperator from "../../../components/Seperator/Index";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from 'react-native-safe-area-context';

const Signin = ({ navigation }) => {
    const onSignUp = () => {
        navigation.navigate('Signup')
    }

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>


            <ScrollView style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign In" />

                <Input label="email" placeholder="google@gmail.com" />
                <Input isPassword label="password" placeholder="............" />

                <Button style={styles.button} title="Sign In" />

                <Seperator text="Or sign in with" />

                <GoogleLogin />

                <Text onPress={onSignUp} style={styles.footerText}>
                    Dont't have an account?
                    <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
                </Text>

            </ScrollView>
        </SafeAreaView>
    );
}
export default Signin;

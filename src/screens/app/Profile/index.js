import React from 'react'
import {  Text, View } from 'react-native'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header/index'
import ListItem from '../../../components/ListItem'
import Button from "../../../components/Button/Index"

const Profile = () => {
    const num = 10
    const onLogout = () => {
        console.log('Log out clicked')
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="Profile" showLogout onLogout={onLogout} />
            <View style={styles.container} >
                <View style={styles.content}>
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.email}>User email </Text>

                    <ListItem title="My listings" subtitle={`You have ${num} listings`} />
                    <ListItem title="Settings" subtitle="Account, FAQ, Contact" />
               

                </View>
                <Button style={{flex: 0}} title="Add New Listing"/>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile)
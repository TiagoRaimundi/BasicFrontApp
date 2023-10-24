import React from 'react'
import {ScrollView,Linking, Text} from 'react-native'
import {styles} from './styles'
import {SafeAreaView} from 'react-native-safe-area-context'
import ListItem from '../../../components/ListItem'
import Header from '../../../components/header/index'

const Settings = () => {
    const onItemPrest = () => {
        Linking.openURL('https://google.com')
    }
    return(
        <SafeAreaView>
            <Header title="Settings"/>
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Help Center</Text>
                <ListItem onPress={onItemPrest} style={styles.item} title="FAQ"/>
                <ListItem onPress={onItemPrest} style={styles.item} title="Contact Us"/>
                <ListItem onPress={onItemPrest} style={styles.item} title="Privacy & Terms"/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings)
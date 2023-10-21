import React from 'react'
import {ScrollView, Text} from 'react-native'
import {styles} from './Styles'
import {SafeAreaView} from 'react-native-safe-area-context'
import Header from '../../../components/header'

const Home = () => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header showSearch title="Find All You Need" />
                <Text>HOME</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Home)
import React from 'react'
import {ScrollView, Text} from 'react-native'
import {styles} from './Styles'
import {SafeAreaView} from 'react-native-safe-area-context'

const Settings = () => {
    return(
        <SafeAreaView>
            <ScrollView >
                <Text>Favorites</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings)
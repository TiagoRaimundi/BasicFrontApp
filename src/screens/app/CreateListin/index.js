import React, { useState } from 'react';
import { ScrollView, Text, } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/index';


const CreateListin = ({ navigation }) => {

    const goBack = () => {
        navigation.goBack();
    }



    return (
        <SafeAreaView>
            <Header showBack={true} onBackPress={goBack} title="Create a new Listing" />
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Upload Photos</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListin);

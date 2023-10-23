import React from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles } from './Styles'


const ProductDetails = ({navigation, route}) => {
    const { product } = route?.params || {}
    console.log('product :>>', product)

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>{product?.title} is {product?.price}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default React.memo(ProductDetails);

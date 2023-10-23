import React from 'react';
import { ScrollView, Text, Image, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles } from './Styles'
import  Button  from './../../../components/Button/Index'

const ProductDetails = ({route}) => {
    const { product } = route?.params || {}
    return (
        
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                <Image style={styles.image} source={{uri: product?.image}} />
                <View style={styles.content}>
                <Text style={styles.title}>{product?.title}</Text>
                <Text style={styles.price}>{product?.price}</Text>
                <Text style={styles.description}>{product?.description}</Text>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkerContainer}>
                    <Image style={styles.bookmarkerIcon} source={require('../../../assets/tabs/bookmarker.png')}/>
                </Pressable>
                <Button title="Contact Seller"/>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(ProductDetails);

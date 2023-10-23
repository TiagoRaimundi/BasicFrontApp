import React from 'react';
import { ScrollView, Text, Image, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles';
import Button from './../../../components/Button/Index';
import ImageCarousel from '../../../components/ImageCarousel/Index';

const ProductDetails = ({ route, navigation }) => {
    const { product = {} } = route?.params;
    const { images, image, title, price, description } = product;

    const onBackPress = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                {images?.length ? (
                    <ImageCarousel images={images} />
                ) : (
                    image && <Image style={styles.image} source={{ uri: image }} />
                )}
                <View style={styles.content}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    {price && <Text style={styles.price}>{price}</Text>}
                    {description && <Text style={styles.description}>{description}</Text>}
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/backdetail.png')} />
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkerContainer}>
                    <Image style={styles.bookmarkerIcon} source={require('../../../assets/tabs/bookmarker.png')} />
                </Pressable>
                <Button title="Contact Seller" />
            </View>
        </SafeAreaView>
    );
};

export default React.memo(ProductDetails);

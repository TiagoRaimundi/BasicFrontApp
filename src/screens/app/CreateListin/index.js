import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { launchImageLibrary } from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/index';

const CreateListin = ({ navigation }) => {
    const [images, setImages] = useState([])

    const goBack = () => {
        navigation.goBack();
    }

    const UploadNewImage = async () => {
        const result = await launchImageLibrary();
        console.log('resul :>>>', result);
        if (result?.assets?.length) {
            setImages(prevImages => [...prevImages, ...result.assets]);
        }
    }

    console.log('images:>>', images);

    return (
        <SafeAreaView>
            <Header showBack={true} onBackPress={goBack} title="Create a new Listing" />
            <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>Upload Photos</Text>

                <View style={styles.imageRow}>
               
                    <TouchableOpacity style={styles.uploadContainer} onPress={UploadNewImage}>
                        <View style={styles.uploadCircle}>
                            <Text style={styles.uploadPlus}>+</Text>
                        </View>
                    </TouchableOpacity>
                    {images.map(image => (
                        <Image key={image.fileName} style={styles.image} source={{ uri: image.uri }} />
                    ))}

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListin);

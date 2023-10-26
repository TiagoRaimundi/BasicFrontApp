import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, Pressable, ActivityIndicator, KeyboardAvoidingView,Platform  } from 'react-native';
import { styles } from './styles';
import { launchImageLibrary } from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header/index';
import Input from '../../../components/input/index';

const CreateListin = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);

    const goBack = () => {
        navigation.goBack();
    }

    const UploadNewImage = async () => {
        Keyboard.dismiss();
        setLoading(true);
        const result = await launchImageLibrary();

        if (result?.didCancel) {
            setLoading(false);
            return;
        }

        if (result?.error) {
            console.error("Error picking image:", result.error);
            setLoading(false);
            return;
        }

        if (result?.assets?.length) {
            setImages(prevImages => [...prevImages, ...result.assets]);
        }

        setLoading(false);
    }

    const onDeleteImage = (image) => {
        setImages(prevImages => prevImages.filter(img => img.fileName !== image.fileName));
    }

    const onChange = (value, key) => {
        setValues(prevValues => ({ ...prevValues, [key]: value }));
    }

    return (
        <SafeAreaView>
            <Header showBack={true} onBackPress={goBack} title="Create a new Listing" />
            <KeyboardAvoidingView behavior='position'>
                <ScrollView style={styles.container}>
                    <Text style={styles.sectionTitle}>Upload Photos</Text>
                    <View style={styles.imageRow}>
                        <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={UploadNewImage}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadPlus}>+</Text>
                            </View>
                        </TouchableOpacity>
                        {images.map(image => (
                            <View style={styles.imageCont} key={image.fileName}>
                                <Image style={styles.image} source={{ uri: image.uri }} />
                                <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                                    <Image style={styles.delete} source={require('../../../assets/Shape.png')} />
                                </Pressable>
                            </View>
                        ))}
                        {loading && (
                            <ActivityIndicator />
                        )}
                    </View>
                    <Input placeholder="Listing Title" label="Title" value={values.title} onChangeText={(v) => onChange(v, 'title')} />
                    <Input placeholder="Enter price in USD" label="Price" value={values.price} onChangeText={(v) => onChange(v, 'price')} keyboardType="numeric" />
                    <Input style={styles.textarea} placeholder="Tell us more..." label="Description" value={values.description} onChangeText={(v) => onChange(v, 'description')} />

                </ScrollView>

            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

export default React.memo(CreateListin);

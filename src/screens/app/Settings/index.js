import React, { useState } from 'react';
import { ScrollView, Linking, Text, Image, View, Pressable } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '../../../components/ListItem';
import Header from '../../../components/header/index';
import EditableBox from '../../../components/EditableBox';
import Button from '../../../components/Button/Index';

const Settings = ({navigation}) => {
    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState({ name: 'User', email: 'user@mail.com' });

    const onEditPress = () => {
        setEditing(true);
    }

    const onSave = () => {
        setEditing(false); // Corrigido para definir como false.
    }

    const onChange = (key, value) => {
        setValues(v => ({ ...v, [key]: value })); // Corrigido "valeu" para "value".
    }

    const onItemPress = () => {
        Linking.openURL('https://google.com');
    }

    
    const goBack = () => {
        navigation.goBack()
    }


    return (
        <SafeAreaView>
            <Header showBack onBackPress={goBack} title="Settings" />
            <ScrollView style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon} source={require('../../../assets/edit.png')} />
                    </Pressable>
                </View>
                <EditableBox label="Name" onChangeText={(v) => onChange('name', v)} value={values.name} editable={editing} />
                <EditableBox label="Email" onChangeText={(v) => onChange('email', v)} value={values.email} editable={editing} />
                {editing ? (
                    <Button style={styles.Button} onPress={onSave} title="Save" />
                ) : null}

                <Text style={[styles.sectionTitle, { marginTop: 40 }]}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
                <ListItem onPress={onItemPress} style={styles.item} title="Contact Us" />
                <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings);

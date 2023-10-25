import React from "react";
import { Pressable, Text, View, Image, TextInput } from "react-native";
import { styles } from "./styles";

const EditableBox = ({ label, value, onPress, editable, onChangeText, style }) => {
    return (
        <View onPress={onPress} style={styles.container}>
       
                <Text style={styles.label}>{label}</Text>
                <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input}/>
     
        </View>
    );
}

export default EditableBox;

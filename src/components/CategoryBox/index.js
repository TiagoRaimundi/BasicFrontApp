import React, { useState } from "react"
import { Pressable, Text, View, Image } from "react-native"
import { styles } from "./styles"
import Input  from "../input"

const CategoryBox = ({ title, image, onPress }) => {
    return (
      <Pressable onPress={onPress} style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri:image}}/>
        </View>
        <Text>{title}</Text>
      </Pressable>

   
    )
}

export default CategoryBox
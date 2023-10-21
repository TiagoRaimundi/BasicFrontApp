import React, { useState } from "react"
import { Pressable, Text, View, Image } from "react-native"
import { styles } from "./styles"
import Input  from "../input"

const Header = ({ title, onBackPress, onLogout, showLogout, showSearch, showBack }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearchClick = () => {
    setShowSearchInput(s => !s)
  } 

    return (
      <View>
          <View style={styles.container}>
            {showBack ? (
             <Pressable onPress={onBackPress}>
                  <Image style={styles.icon} source={require('../../assets/back.png')} />
              </Pressable>
            ) : showSearch ? (
                <Pressable onPress={onSearchClick}>
                  <Image style={styles.icon} source={require('../../assets/search.png')} />
                </Pressable>

            ) : <View style={styles.space}/>}
            <Text style={styles.title}>{title}</Text>

            {showLogout ? (
                <Pressable onPress={onLogout}>
                <Image style={styles.icon} source={require('../../assets/Logout.png')} />
              </Pressable>

            ): <View style={styles.space}/>}
        </View>
              {showSearchInput ? (
                <Input placeholder="Type your keyhword..."/>
              ): null}
      </View>
    )
}

export default Header
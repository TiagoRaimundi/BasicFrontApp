import React, { useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import Input from '../input';
import { styles } from './styles';

const Header = ({ title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack, value }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearchClick = () => {
        setShowSearchInput(s => !s)
    }

    return (
        <View style={styles.mainContainer}>
           <View style={styles.container}>
            {showBack ? (
             <Pressable onPress={onBackPress}>
                  <Image style={styles.icon} source={require('../../assets/back1.png')} />
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
                <Input onChangeText={onSearch} value={keyword} onplaceholder="Type your keyhword..."/>
              ): null}
        </View>
    )
}

export default React.memo(Header);
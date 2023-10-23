import React from 'react';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/header';

const Favorites = () => {
    const renderItem = ({ item }) => {
        return <FavoriteItem {...item} />;
    }

    return (
        <SafeAreaView>
            <Header title="Favorites"/>
            <FlatList 
                data={products} 
                renderItem={renderItem} 
                keyExtractor={(item) => String(item?.id)}
            />
        </SafeAreaView>
    );
}

export default React.memo(Favorites);

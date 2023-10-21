import React, { useState, useEffect } from 'react';
import { Text, FlatList, ScrollView, View } from 'react-native';
import { styles } from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header';
import { categories } from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';
import { products } from '../../../data/products';
import ProductHomeItem from '../../../components/ProductHomeItem';


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState()
    const [filteredProducts, setFilteredProducts] = useState()

    useEffect(() => {
        if (selectedCategory) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory)
            setFilteredProducts(updatedProducts)
        } else{
            setFilteredProducts(products)
        }
    }, [selectedCategory])


    const renderCategoryItem = ({ item, index }) => {
        console.log('item:>>', item);
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item?.id === selectedCategory}
                isFirst={index === 0}
                title={item?.title}
                image={item?.image}

            />
        )
    };

    const renderProductItem = ({ item }) => {
        return (
            <ProductHomeItem {...item} />
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <Header showSearch title="Find All You Need" />

            <FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.list}
                horizontal
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => String(index)}

            />

            <FlatList
                style={styles.productsList}
                numColumns={2}
                data={filteredProducts}
                renderItem={renderProductItem}
                keyExtractor={(item) => String(item.id)}
                ListFooterComponent={<View style={{ height: 200 }}></View>}
            />




        </SafeAreaView>
    );
};

export default React.memo(Home);

import React from 'react';
import { Text, FlatList, ScrollView } from 'react-native';
import { styles } from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header';
import { categories } from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';


const Home = () => {
  const renderCategoryItem = ({ item, index }) => {
    console.log('item:>>', item);
    return (
        <CategoryBox title={item?.title} image={item?.image}/>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header showSearch title="Find All You Need" />

        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          horizontal
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
      
        />

      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);

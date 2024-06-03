// 93 created
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../component/CategoryGridTile';

// navigation is only available to components
export default function CategoriesScreen({ navigation }) {
  // 93 to render Categories
  // 96 moved inside the component
  function renderCategoryItem(itemData) {
    // 96 function to navigate on pressing the CategoryGridTile
    function onPressHandler() {
      navigation.navigate('MealsOverview');
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});

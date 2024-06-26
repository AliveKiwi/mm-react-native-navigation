// 119 created
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import MealItem from './MealItem';

export default function MealsList({ items }) {
  // 100 function to render MealItem
  function renderMealItem(itemData) {
    // const item = itemData.item
    const { item } = itemData;

    // 101 mealItem prop object
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    // standard javascript & react syntax to pass props
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

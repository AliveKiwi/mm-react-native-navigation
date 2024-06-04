import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../component/MealItem';

export default function MealsOverviewScreen({ route }) {
  // 99 extracting data through route prop
  const categoryId = route.params.categoryId;

  // 100 filter - return those items from array which pass the given condition in return statement
  const displayedMeals = MEALS.filter((mealItem) => {
    // 100 indexOf -> if cetegoryId is found in array categoryIds then return the index or else returns -1
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  // 100 function to render MealItem
  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

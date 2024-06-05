import React, { useLayoutEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../component/MealItem';

export default function MealsOverviewScreen({ route, navigation }) {
  // 99 extracting data through route prop
  const categoryId = route.params.categoryId;

  // 100 filter - return those items from array which pass the given condition in return statement
  const displayedMeals = MEALS.filter((mealItem) => {
    // 100 indexOf -> if cetegoryId is found in array categoryIds then return the index or else returns -1
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  // 103 useEffect - Loads title after loading component
  // 103 useLayout - Loads title simultaneously
  useLayoutEffect(() => {
    // 103 get title property
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    // 103 set title of header
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  // 100 function to render MealItem
  function renderMealItem(itemData) {
    // const item = itemData.item
    const { item } = itemData;

    // 101 mealItem prop object
    const mealItemProps = {
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

// import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import MealsList from '../component/MealsList/MealsList';
// import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

export default function FavoritesScreen() {
  // 119 favoriteMealsCtx contains only ids and add/remove ids method
  // const favoriteMealsCtx = useContext(FavoritesContext);

  // 119 get favoriteMeals data using the ids
  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealsCtx.ids.includes(meal.id)
  // );

  // 123 setup to use redux instead of context
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

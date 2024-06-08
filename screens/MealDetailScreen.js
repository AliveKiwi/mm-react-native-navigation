// 104 created
// import React, { useContext, useLayoutEffect } from 'react';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import MealDetails from '../component/MealDetails';
import Subtitle from '../component/MealDetail/Subtitle';
import List from '../component/MealDetail/List';
import IconButton from '../component/IconButton';

import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // 118 get context object
  // const favoriteMealsCtx = useContext(FavoritesContext);

  // 118 boolean : if ids [] have mealId then set true else false
  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  // 118 function to add or remove favorite on button press
  // function changeFavoriteStatusHandler() {
  //   if (mealIsFavorite) {
  //     favoriteMealsCtx.removeFavorite(mealId);
  //   } else favoriteMealsCtx.addFavorite(mealId);
  // }

  // 122 steps to setup redux
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) dispatch(removeFavorite({ id: mealId }));
    else dispatch(addFavorite({ id: mealId }));
  }

  // 107 adding button to header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          // 108 replaced with UC
          <IconButton
            // 118 true = star | false = 'star-outline'
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      {/* 105 */}
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      {/* 106 centers the Subtitle and List */}
      <View style={styles.listOuterContainer}>
        {/* 106 set Subtitle and List to expand 80%*/}
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List items={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List items={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  // 106 set color of text in MealDetails
  detailText: { color: 'white' },
  // 106 centers the Subtitle and List
  listOuterContainer: {
    alignItems: 'center',
  },
  // 106 set Subtitle and List to expand 80%
  listContainer: {
    width: '80%',
  },
});

// 104 created
import React, { useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../component/MealDetails';
import Subtitle from '../component/MealDetail/Subtitle';
import List from '../component/MealDetail/List';

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // 107 function to call on button press
  function headerButtonPressHandler() {
    console.log('Pressed!');
  }

  // 107 adding button to header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me" onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);

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

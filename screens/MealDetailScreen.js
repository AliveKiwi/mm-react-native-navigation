import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>This is the Meal Detail Screen ({mealId})</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

// 105 created
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function MealDetails({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // 105
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  // 105
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

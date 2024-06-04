// 100 added to display MealItem
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function MealItem({ title }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 30 } });

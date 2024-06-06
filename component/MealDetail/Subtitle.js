// 106 created
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // 106 design the Subtitle
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // 106 add space and border below Subtitle
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    margin: 4,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
});

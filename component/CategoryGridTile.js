// 93 created
import React from 'react';
import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';

// 96 added onPress props and passed to onPress
function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  // 94
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, // android
    shadowColor: 'black',
    shadowOpacity: 0.25, // ios
    shadowOffset: { width: 0, height: 2 }, // ios
    shadowRadius: 8, // ios
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // to prevent the android_ripple effect from going outside // remove shadow from ios
  },

  // 94
  button: { flex: 1 },

  // 94 pressed style for iOS
  buttonPressed: {
    opacity: 0.5,
  },

  // 94
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // 94
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

// 100 added to display MealItem
import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MealDetails from '../MealDetails';

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealDetail', { mealId: id });
  }

  return (
    <View style={styles.mealItem}>
      {/* 101 structure & styling */}
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            {/* 101 when using url use { uri : url } syntax */}
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  // 101
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // overflow : hidden disable shadow on iOS
    backgroundColor: 'white',
    elevation: 4, // android
    shadowColor: 'black', // ios
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 }, // ios
    shadowRadius: 8, // ios
  },

  // 101
  buttonPressed: {
    opacity: 0.5, // 101 to add feedback to ios button press
  },

  // 101
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden', // 101 don't disable shadow on ios since shadow property are in different container
  },

  // 101
  image: {
    width: '100%',
    height: 200,
  },

  // 101
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});

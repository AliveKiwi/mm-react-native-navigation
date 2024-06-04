// 100 added to display MealItem
import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      {/* 101 structure & styling */}
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            {/* 101 when using url use { uri : url } syntax */}
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
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

  // 101
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  // 101
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

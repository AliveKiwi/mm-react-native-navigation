import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from './screens/CategoriesScreen';

const Stack = createStackNavigator();
console.log(Stack);
export default function App() {
  return (
    <>
      {/* 94 added StatusBar */}
      <StatusBar style="dark" />
      {/* 95 added Navigation */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

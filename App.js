import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* 94 added StatusBar */}
      <StatusBar style="light" />
      {/* 95 added Navigation */}
      <NavigationContainer>
        {/* 102 Added screenOptions to add header styles */}
        <Stack.Navigator
          screenOptions={{
            headerTintColor: '#ffffff',
            headerStyle: { backgroundColor: '#351401' },
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          {/* 102 added options to style header*/}
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          {/* 96 added MealsOverviewScreen*/}
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // 103 pass function in options
            // option={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //   return { title: categoryId };
            // }}
          />
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

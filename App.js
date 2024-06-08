import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// 4 Redux
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

// import FavoritesContextProvider from './store/context/favorites-context';

// 5 Redux
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// 103 added DrawerNavigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#ffffff',
        headerStyle: { backgroundColor: '#351401' },
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: '#ffffff',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      {/* 94 added StatusBar */}
      <StatusBar style="light" />
      {/* 116 */}
      {/* <FavoritesContextProvider> */}
      {/* 120 added Provider from redux */}
      {/* 5 Redux */}
      <Provider store={store}>
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
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
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
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              // 107 Add this button here only if you don't want to interact with MealDetailScreen
              // options={{
              //   headerRight: () => {
              //     return <Button title="Tap Me" onPress={} />;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

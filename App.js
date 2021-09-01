import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// ..Componentes do Stack
import Products from './src/pages/Product';
import NewProduct from './src/pages/NewProduct';
import Details from './src/pages/Details';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">
          {/* ..Stack Screen é a c/ página
            o "name" é o parametro que c/ tela vai chamar para realizar a navegação, semelhante a uma função */}
          <Stack.Screen name="Product" component={Products} options={{ headerTintColor:"#f92e6a" }} />
          <Stack.Screen name="New Product" component={NewProduct} options={{ headerTintColor:"#f92e6a" }} />
          <Stack.Screen name="Details" component={Details} options={{ headerTintColor:"#f92e6a" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

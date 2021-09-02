import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// ..Componentes do Stack
import List from './src/pages/Product/List';
import New from './src/pages/Product/New';
import Details from './src/pages/Product/Details';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List Products">
          {/* ..Stack Screen é a c/ página
            o "name" é o parametro que c/ tela vai chamar para realizar a navegação, semelhante a uma função */}
          <Stack.Screen name="List Products" component={List} options={{ headerTintColor:"#f92e6a" }} />
          <Stack.Screen name="New Product" component={New} options={{ headerTintColor:"#f92e6a" }} />
          <Stack.Screen name="Details Product" component={Details} options={{ headerTintColor:"#f92e6a" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

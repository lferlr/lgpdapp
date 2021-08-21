import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from './src/screens/SignIn';
import { Cadastre } from './src/screens/Cadastre';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastre" component={Cadastre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExpenseScreen from './ExpenseUI';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Expense" component={ExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

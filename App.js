import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import store from './redux/Store';
import Login from './Login';
import Task from './Task';
import ShowProfile from './Components/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen name="Home" component={Task} />
          <Stack.Screen name="Profile" component={ShowProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

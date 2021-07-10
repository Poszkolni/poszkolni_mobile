import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Home from './views/Home/Home';
import { store } from './store';

const RootStack = createStackNavigator();

const App = (): JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;

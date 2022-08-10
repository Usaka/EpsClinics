import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pages from '../pages';
import Modals from '../components/modals/modal';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          {Object.keys(Pages)
            .map((pageName) => {
              const nameRoute = pageName.toUpperCase();
              return (
                <Stack.Screen
                  key={nameRoute}
                  name={nameRoute}
                  component={Pages[pageName]}
                  options={{ headerShown: false }}
                />
              );
            })}
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
          <Stack.Screen name="MODAL" component={Modals} options={{ headerShown: false }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

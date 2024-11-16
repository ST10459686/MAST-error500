// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/Navigation';
import { MenuProvider } from './context/MenuConext';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import EnterScreen from './screens/EnterMenu';
import ViewScreen from './screens/ViewMenu';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#FFD700',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ route }) => ({ title: `Welcome, ${route.params.userName}` })}
          />
          <Stack.Screen name="Enter" component={EnterScreen} />
          <Stack.Screen name="View" component={ViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Toast from 'react-native-toast-message';
import {QueryClient, QueryClientProvider} from 'react-query';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './pages/Home';
import About from './pages/About';

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
};

export const queryClient = new QueryClient();

const getTabOption = (
  tabBarLabel: string,
  iconName: string,
): BottomTabNavigationOptions => ({
  tabBarLabel,
  tabBarIcon: ({color, size}) => (
    <Icon name={iconName} color={color} size={size} />
  ),
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={getTabOption('home', 'home')}
          />
          <Tab.Screen
            name="About1"
            component={About}
            options={getTabOption('map', 'map')}
          />
          <Tab.Screen
            name="About2"
            component={About}
            options={getTabOption('list', 'list')}
          />
          <Tab.Screen
            name="Setting"
            component={About}
            options={getTabOption('setting', 'settings')}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <Toast />
    </QueryClientProvider>
  );
};

export default App;

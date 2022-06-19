import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
import {QueryClient, QueryClientProvider} from 'react-query';
import Home from './pages/Home';
import About from './pages/About';
import Setting from './pages/Setting';

export interface IBottomTabNavigator {
  Home: undefined;
  About1: undefined;
  About2: undefined;
  Setting: undefined;
  [key: string]: any;
}

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
};

const Tab = createBottomTabNavigator<IBottomTabNavigator>();

const getTabOption = (
  tabBarLabel: string,
  iconName: string,
): BottomTabNavigationOptions => ({
  tabBarLabel,
  tabBarIcon: ({color, size}) => (
    <Icon name={iconName} color={color} size={size} />
  ),
});

export const queryClient = new QueryClient();

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
            options={getTabOption('calendar', 'calendar')}
          />
          <Tab.Screen
            name="About2"
            component={About}
            options={getTabOption('list', 'list')}
          />
          <Tab.Screen
            name="Setting"
            component={Setting}
            options={getTabOption('settings', 'settings')}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <Toast />
    </QueryClientProvider>
  );
};

export default App;

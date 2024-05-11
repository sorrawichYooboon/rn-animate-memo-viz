import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import StatsScreen from '../../screens/StatsScreen/StatsScreen';
import DecksScreen from '../../screens/DecksScreen/DecksScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    name: 'Stats',
    component: StatsScreen,
    icon: 'bar-chart-outline',
  },
  {
    name: 'Decks',
    component: DecksScreen,
    icon: 'layers-outline',
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    icon: 'options-outline',
  },
];

function BottomTabNavigators() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Decks">
      {tabScreens.map(({name, component, icon}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color, focused}) => (
              <Ionicons
                name={icon}
                size={24}
                color={focused ? color : '#222'}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabNavigators;

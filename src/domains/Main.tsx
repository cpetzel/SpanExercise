import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import ReduxViewerScreen from 'src/domains/debug/debug.screen';
import {ControlScreen} from './control/Control.screen';

class DashboardScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

class ScheduleScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Schedule</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Dashboard: DashboardScreen,
    Control: ControlScreen,
    Schedule: ScheduleScreen,
    Settings: ReduxViewerScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Dashboard') {
          return <AntDesign name={'dashboard'} size={25} color={tintColor} />;
        } else if (routeName === 'Control') {
          return <Octicons name={'settings'} size={25} color={tintColor} />;
        } else if (routeName === 'Schedule') {
          return (
            <MaterialIcons name={'schedule'} size={25} color={tintColor} />
          );
        } else if (routeName === 'Settings') {
          return (
            <MaterialIcons name={'settings'} size={25} color={tintColor} />
          );
        }

        // You can return any component that you like here!
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
  },
);
export default createAppContainer(TabNavigator);

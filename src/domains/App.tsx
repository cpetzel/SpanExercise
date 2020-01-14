import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

class DashboardScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

class ControlScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Control</Text>
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
class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Dashboard: DashboardScreen,
    Control: ControlScreen,
    Schedule: ScheduleScreen,
    Settings: SettingsScreen,
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

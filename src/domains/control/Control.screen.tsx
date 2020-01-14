import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, SectionList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {devices} from 'src/models/devices/Devices.selectors';
import {DeviceButton} from 'src/components/Device.component';
import {Device} from 'src/models/devices/Device.model';


export const ControlScreen = () => {
  const dispatch = useDispatch();
  const devicess = useSelector(state => devices(state));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {devicess.map(it => (
        <DeviceButton device={it} />
      ))}
    </View>
  );
};

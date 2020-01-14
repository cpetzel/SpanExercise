import React from 'react';
import {Text} from 'react-native';
import {DeviceFields, Device} from 'src/models/devices/Device.model';

interface DeviceProps {
  device: DeviceFields;
}

export const DeviceButton = ({device: {id, name}}: DeviceProps) => {
  console.log(`craig props == ${JSON.stringify(id)}`);
  return (
    <Text>
      device with id == ${id} 
    </Text>
  );
};

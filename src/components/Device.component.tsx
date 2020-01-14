import React from 'react';
import {Text} from 'react-native';
import {Appliance, IAppliance} from 'src/models/appliance/Appliance.model';
import {ISpace} from 'src/models/spaces/Space.model';

interface SpaceProps {
  space: ISpace;
}

export const SpaceButton = (space: SpaceProps) => {
  return <Text style={{paddingTop: 20}}>{JSON.stringify(space)}</Text>;
};

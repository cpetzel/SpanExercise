import React, {useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, SectionList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SpaceButton} from 'src/components/Device.component';
import {spaceSelector, tagsSelector} from 'src/models/spaces/Space.selectors';
import {ISpace} from 'src/models/spaces/Space.model';
import {setData} from 'src/models/appliance/Appliance.actions';
import mockResponse from 'src/models/mockResponse';
import {ITag} from 'src/models/tags/Tag.model';

export const ControlScreen = () => {
  const dispatch = useDispatch();
  const spaces = useSelector(state => spaceSelector(state));
  const tags = useSelector(state => tagsSelector(state));

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setTimeout(() => {
      dispatch(setData(mockResponse));
    }, 1000);
  });

  const newSpaces = spaces.filter(space => space.tags.includes('Basic'));

  return <List spaces={newSpaces} tags={tags} />;
};

interface SpaceListProps {
  spaces: ISpace[];
  tags: ITag[];
}

const List = ({spaces, tags}: SpaceListProps[]) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    {spaces?.map(it => (
      <SpaceButton space={it} />
    ))}
    {tags?.map(it => (
      <SpaceButton space={it} />
    ))}
  </View>
);

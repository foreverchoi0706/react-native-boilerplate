import React, {memo, useCallback, VFC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styled from './styled';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {IBottomTabNavigator} from '../../../App';

interface IProps {
  value: number;
}

const DailyCard: VFC<IProps> = ({value}) => {
  const {navigate} =
    useNavigation<BottomTabNavigationProp<IBottomTabNavigator>>();

  const handlePress = useCallback(() => {
    navigate('About1');
  }, [navigate]);

  return (
    <Styled.DailyCard>
      <TouchableOpacity onPress={handlePress}>
        <Text>{value}</Text>
      </TouchableOpacity>
    </Styled.DailyCard>
  );
};

export default memo(DailyCard);

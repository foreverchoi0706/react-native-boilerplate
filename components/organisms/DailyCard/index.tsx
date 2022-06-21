import React, {memo, useCallback, useState, VFC} from 'react';
import {Button, Modal, SafeAreaView, Text} from 'react-native';
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

  console.log(navigate);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlePress = useCallback(() => {
    setIsModalOpen(prevState => !prevState);
  }, []);

  return (
    <Styled.DailyCard>
      <Styled.Temp onPress={handlePress}>
        <Text>{value}</Text>
      </Styled.Temp>
      <Modal visible={isModalOpen} animationType="slide">
        <SafeAreaView>
          <Text>dasdasdasdsadsada</Text>
          <Button title="닫기" onPress={handlePress} />
        </SafeAreaView>
      </Modal>
    </Styled.DailyCard>
  );
};

export default memo(DailyCard);

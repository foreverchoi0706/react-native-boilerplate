import React, {memo, VFC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styled from './styled';

interface IProps {
  value: number;
}

const DailyCard: VFC<IProps> = ({value}) => {
  return (
    <Styled.DailyCard>
      <TouchableOpacity>
        <Text>{value}</Text>
      </TouchableOpacity>
    </Styled.DailyCard>
  );
};

export default memo(DailyCard);

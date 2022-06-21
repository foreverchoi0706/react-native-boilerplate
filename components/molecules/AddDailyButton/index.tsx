import React, {VFC, PropsWithChildren} from 'react';
import Styled from './styled';

interface IProps {
  onPress: () => void;
}

const AddDailyButton: VFC<PropsWithChildren<IProps>> = ({onPress}) => {
  return (
    <Styled.AddDailyButton onPress={onPress}>
      <Styled.InnerText>+</Styled.InnerText>
    </Styled.AddDailyButton>
  );
};

export default AddDailyButton;

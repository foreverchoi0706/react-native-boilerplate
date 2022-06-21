import React, {VFC, PropsWithChildren} from 'react';
import Styled from './styled';

interface IProps {
  title: string;
  bgColor?: string;
  onPress: () => void;
}

const RoundButton: VFC<PropsWithChildren<IProps>> = ({
  title,
  bgColor = '#ffffff',
  onPress,
}) => {
  return (
    <Styled.RoundButton bgColor={bgColor} onPress={onPress}>
      <Styled.InnerText>{title}</Styled.InnerText>
    </Styled.RoundButton>
  );
};

export default RoundButton;

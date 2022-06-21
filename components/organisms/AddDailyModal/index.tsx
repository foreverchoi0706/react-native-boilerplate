import React, {useCallback, VFC} from 'react';
import {Alert, Modal, Text} from 'react-native';
import Form from '../../Form';
import RoundButton from '../../molecules/RoundButton';
import Styled from './styled';

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const AddDailyModal: VFC<IProps> = ({visible, onClose}) => {
  const handleSubmit = useCallback(() => {
    Alert.alert('이 루틴을 등록하시겠어요?', '', [
      {
        text: '예',
        onPress: () => Alert.alert('1'),
      },
      {
        text: '아니오',
      },
    ]);
  }, []);

  return (
    <Modal visible={visible} animationType="slide">
      <Form
        defaultValues={{
          id: '',
          pw: '',
        }}>
        <Styled.AddDaily>
          <Styled.InnerTitle>데일리 루틴을 등록합니다.</Styled.InnerTitle>
          <Styled.ScrollFormContainer>
            <Text>dasdsadasdsad</Text>
          </Styled.ScrollFormContainer>
          <Styled.ButtonContainer>
            <RoundButton title="등록" bgColor="coral" onPress={handleSubmit} />
            <RoundButton title="닫기" bgColor="#c4c4c4" onPress={onClose} />
          </Styled.ButtonContainer>
        </Styled.AddDaily>
      </Form>
    </Modal>
  );
};

export default AddDailyModal;

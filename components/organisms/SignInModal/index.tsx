import React, {useCallback, VFC} from 'react';
import {Button} from 'react-native';
import Form from '../../Form';
import useSignIn from '../../../hooks/useSignin';
import useAsyncStorage from '../../../hooks/useAsyncStorage';
import FormButton from '../../molecules/FormButton';
import FormInput from '../../molecules/FormInput';
import Styled from './styled';
import {FieldValues} from 'react-hook-form';

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const SignInModal: VFC<IProps> = ({visible, onClose}) => {
  const {mutate} = useSignIn();

  const {setStorage} = useAsyncStorage();

  const handleSubmit = useCallback(
    (fieldValues: FieldValues) => {
      mutate(fieldValues as ISignInInfo, {
        onSuccess: async () => {
          await setStorage('fieldValues', fieldValues, onClose);
        },
      });
    },
    [onClose, mutate, setStorage],
  );

  return (
    <Styled.SignInModal visible={visible} animationType="slide">
      <Styled.View>
        <Button title="닫기" onPress={onClose} />
        <Styled.Title>회원가입해주세요</Styled.Title>
        <Form
          defaultValues={{
            id: '',
            pw: '',
          }}>
          <FormInput name="id" placeholder="ID" />
          <FormInput name="pw" placeholder="PW" />
          <FormButton title="CLICK" onSubmit={handleSubmit} />
        </Form>
      </Styled.View>
    </Styled.SignInModal>
  );
};

export default SignInModal;

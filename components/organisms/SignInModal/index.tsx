import React, {VFC} from 'react';
import {FieldValues} from 'react-hook-form';
import {Button} from 'react-native';
import Form from '../../Form';
import FormButton from '../../molcules/FormButton';
import FormInput from '../../molcules/FormInput';
import Styled from './styled';
import useSignIn from '../../../hooks/useSignin';

interface IProps {
  isOpen: boolean;
  handlePress: () => void;
}

const SignInModal: VFC<IProps> = ({isOpen, handlePress}) => {
  const {mutate} = useSignIn();

  const onSubmit = (fieldValues: FieldValues) => {
    mutate(fieldValues as ISignInInfo, {
      onSuccess: () => {
        handlePress();
      },
    });
  };

  return (
    <Styled.SignInModal visible={isOpen} animationType="slide">
      <Styled.View>
        <Button title="닫기" onPress={handlePress} />
        <Styled.Title>회원가입해주세요</Styled.Title>
        <Form
          defaultValues={{
            id: '',
            pw: '',
          }}>
          <FormInput name="id" placeholder="ID" />
          <FormInput name="pw" placeholder="PW" />
          <FormButton title="CLICK" onSubmit={onSubmit} />
        </Form>
      </Styled.View>
    </Styled.SignInModal>
  );
};

export default SignInModal;

import React, {Dispatch, SetStateAction, useState, VFC} from 'react';
import {FieldValues} from 'react-hook-form';
import {Button, Modal, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import {SetState} from 'zustand';
import Form from '../../Form';
import FormButton from '../../molcules/FormButton';
import FormInput from '../../molcules/FormInput';
import Styled from './styled';

interface IProps {
  isOpen: boolean;
  handlePress: () => void;
}

const SignInModal: VFC<IProps> = ({isOpen, handlePress}) => {
  const onSubmit = (fieldValues: FieldValues) => {
    Toast.show({
      type: 'success',
      text1: '지원완료!',
      text2: '설정 -> 마이페이지에서 확인가능합니다.',
    });
    console.log(fieldValues);
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

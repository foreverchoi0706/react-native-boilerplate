import React, {VFC} from 'react';
import {Button, ButtonProps} from 'react-native';
import {FieldValues, SubmitHandler, useFormContext} from 'react-hook-form';
import Styled from './styled';

interface IProps extends ButtonProps {
  onSubmit: SubmitHandler<FieldValues>;
}

const FormButton: VFC<IProps> = ({title, onSubmit}) => {
  const {handleSubmit} = useFormContext();

  return <Styled.FormButton title={title} onPress={handleSubmit(onSubmit)} />;
};

export default FormButton;

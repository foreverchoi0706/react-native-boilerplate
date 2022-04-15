import React, {VFC} from 'react';
import {ButtonProps} from 'react-native';
import {FieldValues, SubmitHandler, useFormContext} from 'react-hook-form';
import Button from '../../atoms/Button';
import Styled from './styled';

interface IProps extends ButtonProps {
  onSubmit: SubmitHandler<FieldValues>;
}

const FormButton: VFC<IProps> = ({title, onSubmit}) => {
  const {handleSubmit} = useFormContext();

  return (
    <Styled.FormButton>
      <Button title={title} onPress={handleSubmit(onSubmit)} />
    </Styled.FormButton>
  );
};

export default FormButton;

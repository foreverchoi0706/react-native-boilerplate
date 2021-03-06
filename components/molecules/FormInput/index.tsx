import React, {VFC} from 'react';
import {TextInputProps} from 'react-native';
import {Controller, useFormContext} from 'react-hook-form';
import TextInput from '../../atoms/TextInput';
import Styled from './styled';

interface IProps extends TextInputProps {
  name: string;
}

const FormInput: VFC<IProps> = ({name, keyboardType, placeholder, ...rest}) => {
  const {
    control,
    formState: {errors},
  } = useFormContext();
  return (
    <Styled.FormInput>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onChangeText={onChange}
            onKeyPress={rest.onKeyPress}
            onSubmitEditing={rest.onSubmitEditing}
            onBlur={onBlur}
            value={value}
            keyboardType={keyboardType}
            placeholder={placeholder}
          />
        )}
        name={name}
      />
      {errors[name] && <Styled.ErrorText>This is required.</Styled.ErrorText>}
    </Styled.FormInput>
  );
};

export default FormInput;

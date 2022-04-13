import React, {PropsWithChildren, VFC} from 'react';
import {FieldValues, FormProvider, useForm} from 'react-hook-form';

interface IProps {
  defaultValues: FieldValues;
}

const Form: VFC<PropsWithChildren<IProps>> = ({children, defaultValues}) => {
  const method = useForm({defaultValues});

  return <FormProvider {...method}>{children}</FormProvider>;
};

export default Form;

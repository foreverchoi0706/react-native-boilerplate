import React, {VFC} from 'react';
import Toast from 'react-native-toast-message';
import {FieldValues} from 'react-hook-form';
import Layout from '../components/Layout';
import Form from '../components/Form';
import FormInput from '../components/molcules/FormInput';
import FormButton from '../components/molcules/FormButton';

const Home: VFC = () => {
  const onSubmit = (fieldValues: FieldValues) => {
    Toast.show({
      type: 'success',
      text1: '지원완료!',
      text2: '설정 -> 마이페이지에서 확인가능합니다.',
    });
    console.log(fieldValues);
  };

  return (
    <Layout>
      <Form
        defaultValues={{
          id: '',
          pw: '',
        }}>
        <FormInput name="id" placeholder="ID" />
        <FormInput name="pw" placeholder="PW" />
        <FormButton title="CLICK" onSubmit={onSubmit} />
      </Form>
    </Layout>
  );
};

export default Home;

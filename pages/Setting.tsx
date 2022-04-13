import React, {VFC} from 'react';
import {Text} from 'react-native';
import Layout from '../components/Layout';
import useUserSotre from '../hooks/stores/useUserSotre';

const Setting: VFC = () => {
  const name = useUserSotre(state => state.name);

  return (
    <Layout>
      <Text>{name}2</Text>
    </Layout>
  );
};

export default Setting;

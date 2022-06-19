import React, {VFC} from 'react';
import {Text} from 'react-native';
import Layout from '../components/Layout';
import useUserStore from '../hooks/stores/useUserStore';
import shallow from 'zustand/shallow';

const About: VFC = () => {
  const name = useUserStore(state => state.name, shallow);

  console.log(name);
  return (
    <Layout scroll={false}>
      <Text>{name}</Text>
      {/*<SignInModal*/}
      {/*  isOpen*/}
      {/*  onClose={() => {*/}
      {/*    console.log(1);*/}
      {/*  }}*/}
      {/*/>*/}
    </Layout>
  );
};

export default About;

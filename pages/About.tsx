import React, {VFC} from 'react';
import {Text} from 'react-native';
import Layout from '../components/Layout';
import useUserStore from '../hooks/stores/useUserStore';

const About: VFC = () => {
  const name = useUserStore(state => state.name);

  console.log(name);
  return (
    <Layout>
      <Text>{name}2</Text>
    </Layout>
  );
};

export default About;

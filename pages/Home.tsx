import React, {useState, VFC} from 'react';
import {Button} from 'react-native';
import Layout from '../components/Layout';
import FormSignIn from '../components/organisms/SignInModal';

const Home: VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      <Button title="CLICK" onPress={handlePress} />
      <FormSignIn isOpen={isOpen} handlePress={handlePress} />
    </Layout>
  );
};

export default Home;

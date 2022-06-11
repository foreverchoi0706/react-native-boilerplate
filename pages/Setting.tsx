import React, {useCallback, useState, VFC} from 'react';
import {Button} from 'react-native';
import Layout from '../components/Layout';
import FormSignIn from '../components/organisms/SignInModal';
import useAsyncStorage from '../hooks/useAsyncStorage';

const Setting: VFC = () => {
  const {getStorage, clearStorage} = useAsyncStorage();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePress = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  const handlePress2 = useCallback(async () => {
    const a = await getStorage('fieldValues');
    console.log(18, a);
  }, [getStorage]);

  const handlePress3 = useCallback(() => {
    clearStorage();
  }, [clearStorage]);

  return (
    <Layout>
      <Button title="CLICK" onPress={handlePress} />
      <Button title="GET" onPress={handlePress2} />
      <Button title="CLEAR" onPress={handlePress3} />
      <FormSignIn isOpen={isOpen} handlePress={handlePress} />
    </Layout>
  );
};

export default Setting;

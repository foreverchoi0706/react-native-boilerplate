import React, {useCallback, VFC} from 'react';
import {Button} from 'react-native';
import Layout from '../components/Layout';
import useAsyncStorage from '../hooks/useAsyncStorage';

const Setting: VFC = () => {
  const {getStorage, clearStorage} = useAsyncStorage();

  const handlePress2 = useCallback(async () => {
    const a = await getStorage('fieldValues');
    console.log(18, a);
  }, [getStorage]);

  const handlePress3 = useCallback(() => {
    clearStorage();
  }, [clearStorage]);

  return (
    <Layout>
      <Button title="GET" onPress={handlePress2} />
      <Button title="CLEAR" onPress={handlePress3} />
    </Layout>
  );
};

export default Setting;

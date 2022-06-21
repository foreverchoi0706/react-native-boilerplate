import React, {memo, useCallback, useState, VFC} from 'react';
import {ScrollView} from 'react-native';
import Layout from '../components/Layout';
import AddDailyButton from '../components/molecules/AddDailyButton';
import DailyCard from '../components/organisms/DailyCard';
import SearchFilter from '../components/organisms/SearchFilter';
import AddDailyModal from '../components/organisms/AddDailyModal';

const Home: VFC = () => {
  const [arr, setArr] = useState<number[]>(
    new Array(20).fill('test').map((_, key) => key),
  );

  const [isModalOpen, setIsModalOepn] = useState<boolean>(false);

  const handlePress = useCallback(() => {
    setIsModalOepn(prevState => !prevState);
  }, []);

  return (
    <Layout>
      <SearchFilter setArr={setArr} />
      <ScrollView>
        {arr.map((value, key) => (
          <DailyCard key={key} value={value} />
        ))}
      </ScrollView>
      <AddDailyButton onPress={handlePress} />
      <AddDailyModal visible={isModalOpen} onClose={handlePress} />
    </Layout>
  );
};

export default memo(Home);

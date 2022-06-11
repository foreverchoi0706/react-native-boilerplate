import React, {memo, useState, VFC} from 'react';
import Layout from '../components/Layout';
import DailyCard from '../components/organisms/DailyCard';
import SearchFilter from '../components/organisms/SearchFilter';
import {ScrollView} from 'react-native';

const Home: VFC = () => {
  const [arr, setArr] = useState<number[]>(
    new Array(20).fill('test').map((_, key) => key),
  );

  return (
    <Layout scroll={false}>
      <SearchFilter setArr={setArr} />
      <ScrollView>
        {arr.map((value, key) => (
          <DailyCard key={key} value={value} />
        ))}
      </ScrollView>
    </Layout>
  );
};

export default memo(Home);

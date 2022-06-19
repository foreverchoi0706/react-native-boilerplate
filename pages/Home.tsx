import React, {memo, useState, VFC} from 'react';
import {ScrollView, View} from 'react-native';
import Layout from '../components/Layout';
import AddDailyButton from '../components/molcules/AddDailyButton';
import DailyCard from '../components/organisms/DailyCard';
import SearchFilter from '../components/organisms/SearchFilter';

const Home: VFC = () => {
  const [arr, setArr] = useState<number[]>(
    new Array(20).fill('test').map((_, key) => key),
  );

  return (
    <Layout>
      <View>
        <SearchFilter setArr={setArr} />
        <ScrollView>
          {arr.map((value, key) => (
            <DailyCard key={key} value={value} />
          ))}
        </ScrollView>
        <AddDailyButton />
      </View>
    </Layout>
  );
};

export default memo(Home);

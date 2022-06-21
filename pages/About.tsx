import React, {useCallback, useState, VFC} from 'react';
import {Text} from 'react-native';
import shallow from 'zustand/shallow';
import {Agenda, LocaleConfig} from 'react-native-calendars';
import {localeConfig} from '../constants/calendar';
import useUserStore from '../hooks/stores/useUserStore';
import Layout from '../components/Layout';
import AddDailyButton from '../components/molecules/AddDailyButton';
import AddDailyModal from '../components/organisms/AddDailyModal';

const KR = 'kr';

LocaleConfig.locales[KR] = {
  ...localeConfig,
};
LocaleConfig.defaultLocale = KR;

const About: VFC = () => {
  const name = useUserStore(state => state.name, shallow);

  const [isModalOpen, setIsModalOepn] = useState<boolean>(false);

  const handlePress = useCallback(() => {
    setIsModalOepn(prevState => !prevState);
  }, []);

  console.log(name);
  return (
    <Layout scroll={false}>
      <Agenda
        items={{
          '2022-06-21': [{name: 'item 1 - any js object', height: 1, day: '1'}],
          '2022-06-25': [
            {name: 'item 1 - any js object', height: 1, day: '1'},
            {name: 'item 2 - any js object', height: 1, day: '1'},
          ],
        }}
        onDayPress={day => {
          console.log(day, 'day pressed');
        }}
        onDayChange={day => {
          console.log(day, 'day changed');
        }}
        renderItem={(item, firstItemInDay) => {
          console.log(item, firstItemInDay);
          return <Text>dasd</Text>;
        }}
        theme={{
          agendaDayTextColor: 'black',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue',
        }}
      />
      <AddDailyButton onPress={handlePress} />
      <AddDailyModal visible={isModalOpen} onClose={handlePress} />
    </Layout>
  );
};

export default About;

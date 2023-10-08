import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ShortSummary} from '@widgets/ShortSummary';
import {History} from '@widgets/History';
import {Header} from '@entities/Header';
import {ProductRecord} from '@shared/types';
import {homeStyle} from './homeStyle';

const Home = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [data, setData] = useState<ProductRecord[]>([]);

  const getData = async () => {
    const dataString = await AsyncStorage.getItem('history');
    if (dataString) {
      const parsedData = JSON.parse(dataString);
      const currentDate = new Date();
      const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1,
      );

      const filteredAndSortedData = parsedData
        .filter((item: ProductRecord) => {
          const itemDate = new Date(item.date);
          return itemDate >= firstDayOfMonth && itemDate <= currentDate;
        })
        .sort((a: ProductRecord, b: ProductRecord) => {
          const bDate = new Date(b.date).getTime();
          const aDate = new Date(a.date).getTime();

          return bDate - aDate;
        });

      setData(filteredAndSortedData);
    }
  };

  useEffect(() => {
    getData();
  }, [addModalOpen]);

  return (
    <View style={homeStyle.wrapper}>
      <Header />
      <ShortSummary data={data} />
      <History
        data={data}
        addModalOpen={addModalOpen}
        setAddModalOpen={setAddModalOpen}
      />
    </View>
  );
};

export default Home;

import React, {Dispatch, SetStateAction} from 'react';
import {Text, View} from 'react-native';
import {AddModal} from '@entities/AddModal';
import {ProductRecord} from '@shared/types';
import {Category} from '@shared/ui';
import AddIcon from '@shared/assets/icons/add.svg';
import {historyStyle} from './historyStyle';

interface Props {
  data: ProductRecord[];
  addModalOpen: boolean;
  setAddModalOpen: Dispatch<SetStateAction<boolean>>;
}

const History = ({data, addModalOpen, setAddModalOpen}: Props) => {
  return (
    <View style={historyStyle.container}>
      <View style={historyStyle.titleContainer}>
        <Text style={historyStyle.title}>August's History</Text>
        <AddIcon
          width={18}
          height={18}
          onTouchEnd={() => setAddModalOpen(true)}
        />
      </View>
      <View style={historyStyle.itemContainer}>
        <Text style={historyStyle.subtitle}>Product</Text>
        <Text style={{...historyStyle.subtitle, maxWidth: 60}}>Date</Text>
        <Text style={historyStyle.subtitle}>Category</Text>
        <Text style={historyStyle.subtitle}>Price</Text>
      </View>
      {data.map((item, index) => {
        const itemDate = new Date(item.date);
        return (
          <View key={index} style={historyStyle.itemContainer}>
            <Text
              numberOfLines={1}
              style={{...historyStyle.text, color: item.category.color}}>
              {item.product}
            </Text>
            <Text
              style={{
                ...historyStyle.text,
                color: item.category.color,
                maxWidth: 40,
              }}>
              {itemDate.getDate()}
            </Text>
            <Category category={item.category} />
            <Text style={{...historyStyle.text, color: item.category.color}}>
              {item.price} lei
            </Text>
          </View>
        );
      })}
      <AddModal isVisible={addModalOpen} setIsVisible={setAddModalOpen} />
    </View>
  );
};

export default History;

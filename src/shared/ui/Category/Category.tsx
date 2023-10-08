import React, {Dispatch, SetStateAction} from 'react';
import {Pressable, Text, View} from 'react-native';
import {CategoryRecord} from '@shared/types';
import {categoryStyle} from './categoryStyle';

interface Props {
  category: CategoryRecord;
  selected?: boolean;
  handleSelected?: (id: number) => void;
}

const Category = ({category, selected, handleSelected}: Props) => {
  return (
    <Pressable
      onPress={() => (handleSelected ? handleSelected(category.id) : () => {})}>
      <View
        style={{
          ...categoryStyle.wrapper,
          borderColor: selected ? '#FEFEE2' : category.color,
          backgroundColor: selected ? category.color : '#FEFEE2',
        }}>
        <Text
          style={{
            ...categoryStyle.title,
            color: selected ? '#FEFEE2' : category.color,
          }}>
          {category.title}
        </Text>
      </View>
    </Pressable>
  );
};

export default Category;

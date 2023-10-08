import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, Text, Button, TextInput, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Category} from '@shared/ui';
import {categories} from '@shared/config';
import {addModalStyle} from './addModalStyle';

interface Props {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const AddModal = ({isVisible, setIsVisible}: Props) => {
  const [spending, setSpending] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(new Date().toString());
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const handleSubmit = async () => {
    if (!spending || !price || categoryId === null) return;

    const value = await AsyncStorage.getItem('history');
    const findCategory = categories.find(item => item.id === categoryId);
    let historyData = [];

    if (value) {
      historyData = JSON.parse(value);
    }

    historyData.unshift({
      product: spending,
      date: date.toString(),
      category: findCategory,
      price: price,
    });

    await AsyncStorage.setItem('history', JSON.stringify(historyData));

    setSpending('');
    setPrice('');
    setCategoryId(null);
    setIsVisible(false);
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
      <View style={addModalStyle.wrapper}>
        <View style={addModalStyle.container}>
          <Text style={addModalStyle.title}>Add new spending</Text>
          <TextInput
            value={spending}
            placeholder="The spending"
            placeholderTextColor="rgba(127, 195, 126, 0.6)"
            style={addModalStyle.input}
            onChangeText={text => setSpending(text)}
          />
          <TextInput
            value={price}
            placeholder="Price"
            placeholderTextColor="rgba(127, 195, 126, 0.6)"
            style={addModalStyle.input}
            onChangeText={text => setPrice(text)}
          />
          <TextInput
            value={date}
            placeholder="21 August 2023"
            placeholderTextColor="rgba(127, 195, 126, 0.6)"
            style={addModalStyle.input}
            onChangeText={text => setDate(text)}
          />
          <View style={addModalStyle.categories}>
            {categories.map((category, index) => (
              <Category
                key={index}
                category={category}
                selected={category.id === categoryId}
                handleSelected={id => setCategoryId(id)}
              />
            ))}
          </View>
          <Pressable style={addModalStyle.button} onPress={handleSubmit}>
            <Text style={addModalStyle.buttonText}>Done</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AddModal;

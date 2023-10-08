import React from 'react';
import {Text, View} from 'react-native';
import {CategoryRecord, ProductRecord} from '@shared/types';
import {Category} from '@shared/ui';
import {categoriesListStyle} from './categoriesListStyle';

interface Props {
  categories: CategoryRecord[];
  data: ProductRecord[];
  totalSpending: number;
}

const CategoriesList = ({categories, data, totalSpending}: Props) => {
  return (
    <View style={categoriesListStyle.wrapper}>
      {categories.map((category, index) => {
        const dataOfCategory = data.filter(
          item => item.category.id === category.id,
        );
        const categorySpending = dataOfCategory.reduce(
          (total, item) => total + Number(item.price),
          0,
        );

        if (categorySpending) {
          return (
            <View key={index} style={categoriesListStyle.categoryContainer}>
              <Text style={categoriesListStyle.value}>
                {Math.round((categorySpending / totalSpending) * 100)}%
              </Text>
              <Category category={category} />
            </View>
          );
        }
      })}
    </View>
  );
};

export default CategoriesList;

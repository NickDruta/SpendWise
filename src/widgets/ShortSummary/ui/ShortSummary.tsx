import React from 'react';
import {Text, View} from 'react-native';
import {CategoriesList} from '@features/CategoriesList';
import {categories} from '@shared/config';
import {ProductRecord} from '@shared/types';

import {CircleChart} from '@shared/ui';
import {shortSummaryStyle} from './shortSummaryStyle';

interface Props {
  data: ProductRecord[];
}

const ShortSummary = ({data}: Props) => {
  const totalSpending = data.reduce(
    (total, item) => total + Number(item.price),
    0,
  );
  return (
    <View style={shortSummaryStyle.container}>
      <Text style={shortSummaryStyle.title}>August's Spendings</Text>
      <View style={shortSummaryStyle.dataContainer}>
        <CircleChart
          widthAndHeight={160}
          series={[60, 20, 10, 10].reverse()}
          sliceColor={['#7FC37E', '#E28E2A', '#838600', '#E22A2A'].reverse()}
          totalSpending={totalSpending}
        />
        <CategoriesList
          categories={categories}
          data={data}
          totalSpending={totalSpending}
        />
      </View>
    </View>
  );
};

export default ShortSummary;

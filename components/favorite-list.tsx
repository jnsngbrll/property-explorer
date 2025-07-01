import { FlatList, View } from 'react-native';

import type { tProperty } from '@/types/property';

import { PropertyCard } from './property-card';

type Props = {
  data: tProperty[];
};

export const FavoriteList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PropertyCard key={item.id} data={item} />}
      ItemSeparatorComponent={() => <View className="h-8" />}
    />
  );
};

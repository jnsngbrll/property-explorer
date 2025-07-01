import { FlatList } from 'react-native';

import type { tProperty } from '@/types/property';

import { PropertyCard } from './property-card';

type Props = {
  data: tProperty[];
};

export const PropertyList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PropertyCard key={item.id} data={item} />}
      showsVerticalScrollIndicator={false}
      className="h-full"
    />
  );
};

import { FlatList, View } from 'react-native';

import type { tProperty } from '@/types/property';

import { PropertyCard } from './property-card';

type Props = {
  data: tProperty[];
};

export const PropertyList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <PropertyCard
          key={item.id}
          id={item.id}
          image={
            'https://a0.muscache.com/im/pictures/miso/Hosting-1047032175710730595/original/f1e6fa1e-ede7-43f5-86de-83ca5b8fdd47.jpeg?im_w=1200'
          }
          title={item.title}
          location={item.location}
          price={item.price}
          isFavorite={item.isFavorite}
        />
      )}
      ItemSeparatorComponent={() => <View className="h-8" />}
    />
  );
};

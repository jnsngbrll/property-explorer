import { router } from 'expo-router';
import Animated, { LinearTransition } from 'react-native-reanimated';

import type { tProperty } from '@/types/property';

import { PropertyCard } from './property-card';
import { EmptyList } from './ui/empty-list';

type Props = {
  data: tProperty[];
};

export const FavoriteList = ({ data }: Props) => {
  return (
    <Animated.FlatList
      data={data}
      renderItem={({ item }) => <PropertyCard key={item.id} data={item} />}
      showsVerticalScrollIndicator={false}
      itemLayoutAnimation={LinearTransition}
      ListEmptyComponent={() => (
        <EmptyList
          description="You don't have any favorite properties yet."
          buttonTitle="Browse Properties"
          onPress={() => router.push('/')}
        />
      )}
    />
  );
};

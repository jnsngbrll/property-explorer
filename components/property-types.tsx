import { ScrollView, Text, TouchableOpacity } from 'react-native';

import type { tProperty } from '@/types/property';

import { getPropertyTypes } from '@/actions/get-property-types';
import { cn } from '@/lib/utils';

type Props = {
  data: tProperty[];
  selectedType: string;
  setSelectedType: (value: string) => void;
};

export const PropertyTypes = ({
  data,
  selectedType,
  setSelectedType,
}: Props) => {
  const types = getPropertyTypes(data);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {['All', ...types].map((item) => {
        const isSelected = item === selectedType;

        return (
          <TouchableOpacity
            key={item}
            onPress={() => setSelectedType(item ?? '')}
            className={cn(
              'py-1 px-3 mr-4 rounded-full',
              isSelected ? 'bg-orange-500' : 'bg-background'
            )}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

import { ScrollView, Text, TouchableOpacity } from 'react-native';

import { cn } from '@/lib/utils';
import type { tProperty } from '@/types/property';

import { getPropertyTypes } from '@/actions/get-property-types';

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

        const backgroundColor = isSelected
          ? 'bg-blue-500'
          : 'bg-secondary-default dark:bg-accent-default';
        const textColor = isSelected
          ? 'text-white font-medium'
          : 'text-secondary-200';

        return (
          <TouchableOpacity
            key={item}
            onPress={() => setSelectedType(item ?? '')}
            className={cn('py-2 px-3 mr-4 rounded-full', backgroundColor)}
          >
            <Text className={textColor}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

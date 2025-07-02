import { Text, TouchableOpacity, View } from 'react-native';

import { cn } from '@/lib/utils';

type Props = {
  value: number;
  onChange: (val: number) => void;
};

export const NumberPicker = ({ value, onChange }: Props) => {
  const options = [0, 1, 2, 3, 4, 5];

  return (
    <View className="flex-row items-center gap-x-2">
      {options.map((option) => {
        const isSelected = option === value;
        return (
          <TouchableOpacity
            key={option}
            className={cn(
              'size-12 rounded-full items-center justify-center',
              isSelected ? 'bg-blue-500' : 'bg-white dark:bg-accent-default'
            )}
            onPress={() => onChange(option)}
          >
            <Text
              className={cn(
                'font-medium',
                isSelected ? 'text-white' : 'text-secondary-200'
              )}
            >
              {option === 0 ? 'Any' : option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

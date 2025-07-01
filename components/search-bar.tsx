import { useState } from 'react';
import { TextInput, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="flex-row flex-grow items-center">
      <Feather
        name="search"
        size={18}
        color={isFocused ? '#60a5fa' : '#808080'}
        className="absolute left-2 z-10"
      />
      <TextInput
        value={value}
        onChangeText={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Enter a property name or location"
        placeholderTextColor="#808080"
        className="flex-grow pl-10 bg-white dark:bg-neutral-800 rounded-xl text-black dark:text-white"
      />
    </View>
  );
};

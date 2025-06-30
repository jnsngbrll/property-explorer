import Feather from '@expo/vector-icons/Feather';
import { TextInput, View } from 'react-native';

export const SearchBar = () => {
  return (
    <View className="flex flex-row items-center">
      <Feather name="search" size={18} className="absolute left-2 z-10" />
      <TextInput
        placeholder="Enter a property name or location"
        className="w-full pl-10 bg-white dark:bg-neutral-800 rounded-xl"
      />
    </View>
  );
};

import Feather from '@expo/vector-icons/Feather';
import { TextInput, View } from 'react-native';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: Props) => {
  return (
    <View className="flex-row flex-grow items-center">
      <Feather name="search" size={18} className="absolute left-2 z-10" />
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Enter a property name or location"
        className="flex-grow pl-10 bg-white dark:bg-neutral-800 rounded-xl"
      />
    </View>
  );
};

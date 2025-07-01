import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <View className="flex-row items-center gap-x-8 mb-4">
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text className="text-xl font-medium">{title}</Text>
    </View>
  );
};

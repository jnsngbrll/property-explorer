import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '@/hooks/use-theme';

import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  const { theme } = useTheme();

  return (
    <View className="py-4 flex-row items-center gap-x-8">
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons
          name="arrow-back"
          size={24}
          color={theme === 'dark' ? 'white' : 'black'}
        />
      </TouchableOpacity>
      <Text className="text-xl font-medium text-black dark:text-white">
        {title}
      </Text>
    </View>
  );
};

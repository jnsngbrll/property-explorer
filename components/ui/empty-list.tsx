import { Text, TouchableOpacity, View } from 'react-native';

import { Title } from './title';

type Props = {
  description: string;
  buttonTitle: string;
  onPress: () => void;
};

export const EmptyList = ({ description, buttonTitle, onPress }: Props) => {
  return (
    <View className="items-center justify-center gap-y-2">
      <Title title={description} className="text-sm font-normal" />
      <TouchableOpacity
        onPress={onPress}
        className="py-2 px-4 bg-white dark:bg-accent-default rounded-xl"
      >
        <Text className="text-black dark:text-white">{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

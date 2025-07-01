import { Text, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  variant?: 'default' | 'secondary';
  onPress?: () => void;
};

export const Button = ({ title, variant = 'default', onPress }: Props) => {
  if (variant === 'secondary') {
    return (
      <TouchableOpacity
        onPress={onPress}
        className="h-12 bg-white dark:bg-accent-default px-4 items-center justify-center rounded-xl"
      >
        <Text className="font-medium text-black dark:text-white">{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className="h-12 bg-blue-500 px-4 items-center justify-center rounded-xl"
    >
      <Text className="font-medium text-white">{title}</Text>
    </TouchableOpacity>
  );
};

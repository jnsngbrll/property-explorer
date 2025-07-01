import { Text } from 'react-native';

import { cn } from '@/lib/utils';

type Props = {
  title: string;
  className?: string;
};

export const Title = ({ title, className }: Props) => {
  return (
    <Text
      className={cn(
        'text-lg text-black dark:text-white font-medium',
        className
      )}
    >
      {title}
    </Text>
  );
};

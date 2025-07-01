import { Text } from 'react-native';

import { cn } from '@/lib/utils';

type Props = {
  title: string;
  className?: string;
};

export const Label = ({ title, className }: Props) => {
  return <Text className={cn('mb-2 font-medium', className)}>{title}</Text>;
};

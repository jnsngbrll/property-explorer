import { SafeAreaView } from 'react-native-safe-area-context';

import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <SafeAreaView
      className={cn('p-4 bg-gray-100 dark:bg-neutral-900', className)}
    >
      {children}
    </SafeAreaView>
  );
};

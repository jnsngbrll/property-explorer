import { SafeAreaView } from 'react-native-safe-area-context';

import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <SafeAreaView
      className={cn(
        'flex-1 px-4 bg-secondary-100 dark:bg-accent-200',
        className
      )}
    >
      {children}
    </SafeAreaView>
  );
};

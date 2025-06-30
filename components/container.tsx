import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

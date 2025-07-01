import { Switch, View } from 'react-native';

import { Container } from '@/components/ui/container';
import { Header } from '@/components/ui/header';
import { Label } from '@/components/ui/label';
import { Title } from '@/components/ui/title';

import { useTheme } from '@/hooks/use-theme';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Header title="Settings" />
      <View className="gap-y-2">
        <Title title="Theme" />
        <View className="px-4 bg-white dark:bg-accent-default rounded-md flex-row items-center justify-between">
          <Label title="Dark mode" className="mb-0" />
          <Switch value={theme === 'dark'} onChange={toggleTheme} />
        </View>
      </View>
    </Container>
  );
}

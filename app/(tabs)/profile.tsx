import { Text } from 'react-native';

import { Container } from '@/components/ui/container';
import { Header } from '@/components/ui/header';

export default function Profile() {
  return (
    <Container>
      <Header title="Profile" />
      <Text className="text-black dark:text-white">Profile</Text>
    </Container>
  );
}

import { Text } from 'react-native';

import { Container } from '@/components/container';
import { SearchBar } from '@/components/search-bar';

export default function Home() {
  return (
    <Container className="gap-y-4">
      <SearchBar />
      <Text className="text-black dark:text-white">Home</Text>
    </Container>
  );
}

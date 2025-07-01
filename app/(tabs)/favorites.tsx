import { FavoriteList } from '@/components/favorite-list';
import { Container } from '@/components/ui/container';
import { Header } from '@/components/ui/header';

import { useFavorites } from '@/hooks/use-favorites';

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <Container>
      <Header title="Favorites" />
      <FavoriteList data={favorites} />
    </Container>
  );
}

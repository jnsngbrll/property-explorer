import { useMemo, useState } from 'react';

import { Container } from '@/components/container';
import { PropertyList } from '@/components/property-list';
import { SearchBar } from '@/components/search-bar';
import { properties } from '@/constants/properties';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');

  // Filter the list of properties by title and location
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (searchInput) {
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          r.location.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    return result;
  }, [searchInput]);

  return (
    <Container className="gap-y-4">
      <SearchBar value={searchInput} onChange={setSearchInput} />
      <PropertyList data={filteredProperties} />
    </Container>
  );
}

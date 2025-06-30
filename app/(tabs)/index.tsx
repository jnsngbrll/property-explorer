import { useMemo, useState } from 'react';

import { properties } from '@/constants/properties';

import { Container } from '@/components/container';
import { PropertyList } from '@/components/property-list';
import { PropertyTypes } from '@/components/property-types';
import { SearchBar } from '@/components/search-bar';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [selectedType, setSelectedType] = useState('All');

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

    if (selectedType !== 'All') {
      result = result.filter((r) => r.type === selectedType);
    }

    return result;
  }, [searchInput, selectedType]);

  return (
    <Container className="gap-y-4">
      <SearchBar value={searchInput} onChange={setSearchInput} />
      <PropertyTypes
        data={properties}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <PropertyList data={filteredProperties} />
    </Container>
  );
}

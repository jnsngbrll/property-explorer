import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo, useRef, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { properties } from '@/constants/properties';

import { FiltersBottomSheet } from '@/components/filters-bottom-sheet';
import { PropertyCard } from '@/components/property-card';
import { PropertyTypes } from '@/components/property-types';
import { SearchBar } from '@/components/search-bar';
import { Container } from '@/components/ui/container';
import { EmptyList } from '@/components/ui/empty-list';

import { useTheme } from '@/hooks/use-theme';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  const { theme } = useTheme();

  const [searchInput, setSearchInput] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 50000,
    guestCount: 0,
    bedCount: 0,
    bathCount: 0,
  });

  const isDarkMode = theme === 'dark';
  const ref = useRef<BottomSheet>(null);

  const updateFilter = (key: keyof typeof filters, value: number) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const onBottomSheetOpen = () => ref.current?.expand();
  const onBottomSheetClose = () => ref.current?.close();

  const onClearFilters = () => {
    setSearchInput('');
    setSelectedType('All');
    setFilters({
      minPrice: 0,
      maxPrice: 50000,
      guestCount: 0,
      bedCount: 0,
      bathCount: 0,
    });
    onBottomSheetClose();
  };

  // Filter the list of properties by title and location
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (searchInput.trim()) {
      const lowerSearch = searchInput.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(lowerSearch) ||
          r.location.toLowerCase().includes(lowerSearch)
      );
    }

    if (selectedType !== 'All') {
      result = result.filter((r) => r.type === selectedType);
    }

    result = result.filter(
      (r) =>
        r.price >= filters.minPrice &&
        r.price <= filters.maxPrice &&
        (filters.guestCount === 0 || r.guestCount >= filters.guestCount) &&
        (filters.bedCount === 0 || r.bedCount >= filters.bedCount) &&
        (filters.bathCount === 0 || r.bathCount >= filters.bathCount)
    );

    return result;
  }, [searchInput, selectedType, filters]);

  // Count of the active filters inside of the bottom sheet
  const filterCount = useMemo(() => {
    const { minPrice, maxPrice, guestCount, bedCount, bathCount } = filters;

    const activeFilters = [
      minPrice > 0,
      maxPrice < 50000,
      guestCount > 0,
      bedCount > 0,
      bathCount > 0,
    ];

    return activeFilters.filter(Boolean).length;
  }, [filters]);

  return (
    <Container className="gap-y-4">
      <View className="flex-row gap-x-2 mt-4">
        <SearchBar value={searchInput} onChange={setSearchInput} />
        <TouchableOpacity
          onPress={onBottomSheetOpen}
          className="size-11 flex items-center justify-center bg-blue-500 rounded-xl"
        >
          <Ionicons name="funnel-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <PropertyTypes
        data={properties}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <FlatList
        data={filteredProperties}
        renderItem={({ item }) => <PropertyCard key={item.id} data={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyList
            description="No properties match your search."
            buttonTitle="Clear all filter"
            onPress={onClearFilters}
          />
        )}
        className="h-full"
      />

      <FiltersBottomSheet
        ref={ref}
        filters={filters}
        updateFilter={updateFilter}
        filterCount={filterCount}
        isDarkMode={isDarkMode}
        onClearFilters={onClearFilters}
      />
    </Container>
  );
}

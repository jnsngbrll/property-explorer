import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { properties } from '@/constants/properties';

import { PropertyList } from '@/components/property-list';
import { PropertyTypes } from '@/components/property-types';
import { SearchBar } from '@/components/search-bar';
import { Container } from '@/components/ui/container';
import { Grid } from '@/components/ui/grid';
import { Label } from '@/components/ui/label';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(8500000);
  const [searchInput, setSearchInput] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['50%'], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const onBottomSheetOpen = useCallback(() => {
    ref.current?.expand();
  }, []);

  const onBottomSheetClose = useCallback(() => {
    ref.current?.close();
  }, []);

  const onClearFilters = () => {
    setMinPrice(0);
    setMaxPrice(8500000);
    onBottomSheetClose();
  };

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

    result = result.filter((r) => r.price >= minPrice && r.price <= maxPrice);

    return result;
  }, [searchInput, selectedType, minPrice, maxPrice]);

  // Count of the active filters inside of the bottom sheet
  const filterCount = useMemo(() => {
    let count = 0;

    if (minPrice > 0) count += 1;
    if (maxPrice < 8500000) count += 1;

    return count;
  }, [minPrice, maxPrice]);

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

      <PropertyList data={filteredProperties} />

      <BottomSheet
        ref={ref}
        index={50}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView className="h-full px-4 relative">
          <View className="flex-row items-center justify-between pb-4 border-b border-border">
            <Text className="text-xl font-medium">Filter</Text>
            <TouchableOpacity onPress={onBottomSheetClose}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>

          <Label title="Price range" className="mt-4" />
          <Grid columns={2} spacing={8}>
            <View>
              <Label title="Min" className="text-mutedForeground" />
              <TextInput
                keyboardType="numeric"
                value={String(minPrice)}
                onChangeText={(text) => setMinPrice(Number(text) || 0)}
                className="border border-border rounded-xl"
              />
            </View>
            <View>
              <Label title="Max" className="text-mutedForeground" />
              <TextInput
                keyboardType="numeric"
                value={String(maxPrice)}
                onChangeText={(text) => setMaxPrice(Number(text) || 0)}
                className="border border-border rounded-xl"
              />
            </View>
          </Grid>
          {filterCount > 0 && (
            <TouchableOpacity
              onPress={onClearFilters}
              className="absolute bottom-4 right-4"
            >
              <Text>Clear all filter ({filterCount})</Text>
            </TouchableOpacity>
          )}
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
}

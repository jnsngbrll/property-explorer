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
import { Title } from '@/components/ui/title';

import { useTheme } from '@/hooks/use-theme';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  const { theme } = useTheme();

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [searchInput, setSearchInput] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const isDarkMode = theme === 'dark';
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
    setMaxPrice(50000);
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
    if (maxPrice < 50000) count += 1;

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
        handleStyle={{
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          backgroundColor: isDarkMode ? '#1E1E1E' : '#F1F2F4',
        }}
        handleIndicatorStyle={{
          borderRadius: 100,
          backgroundColor: isDarkMode ? 'white' : 'black',
        }}
      >
        <BottomSheetView className="h-full px-4 bg-secondary-100 dark:bg-accent-200 relative">
          <View className="flex-row items-center justify-between pb-4 border-b border-dashed border-secondary-200">
            <Title title="Filter" />
            <TouchableOpacity onPress={onBottomSheetClose}>
              <Text className="text-black dark:text-white">Cancel</Text>
            </TouchableOpacity>
          </View>

          <Label title="Price range" className="mt-4" />
          <Grid columns={2} spacing={8}>
            <View>
              <Label title="Min" className="text-secondary-200" />
              <TextInput
                keyboardType="numeric"
                value={String(minPrice)}
                onChangeText={(text) => setMinPrice(Number(text) || 0)}
                className="px-4 bg-white dark:bg-neutral-800 rounded-xl text-black dark:text-white"
              />
            </View>
            <View>
              <Label title="Max" className="text-secondary-200" />
              <TextInput
                keyboardType="numeric"
                value={String(maxPrice)}
                onChangeText={(text) => setMaxPrice(Number(text) || 0)}
                className="px-4 bg-white dark:bg-neutral-800 rounded-xl text-black dark:text-white"
              />
            </View>
          </Grid>
          {filterCount > 0 && (
            <TouchableOpacity
              onPress={onClearFilters}
              className="absolute bottom-4 right-4"
            >
              <Text className="text-black dark:text-white">
                Clear all filter ({filterCount})
              </Text>
            </TouchableOpacity>
          )}
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
}

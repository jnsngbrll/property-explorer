import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { forwardRef, useCallback, useMemo } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import type { tFilter } from '@/types/filter';

import { Grid } from '@/components/ui/grid';
import { Label } from '@/components/ui/label';
import { NumberPicker } from '@/components/ui/number-picker';
import { Title } from '@/components/ui/title';

type Props = {
  filters: tFilter;
  updateFilter: (key: keyof tFilter, value: number) => void;
  filterCount: number;
  isDarkMode: boolean;
  onClearFilters: () => void;
};

export const FiltersBottomSheet = forwardRef<BottomSheet, Props>(
  ({ filters, updateFilter, filterCount, isDarkMode, onClearFilters }, ref) => {
    const snapPoints = useMemo(() => ['70%'], []);

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

    return (
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
        <BottomSheetView className="h-full px-4 bg-secondary-100 dark:bg-accent-200 relative gap-y-4">
          <View className="flex-row items-center justify-between pb-4 border-b border-dashed border-secondary-200">
            <Title title="Filter" />
            <TouchableOpacity onPress={() => (ref as any)?.current?.close()}>
              <Text className="text-black dark:text-white">Cancel</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Label title="Price range" />
            <Grid columns={2} spacing={8}>
              <View>
                <Label title="Min" className="text-secondary-200" />
                <TextInput
                  keyboardType="numeric"
                  value={String(filters.minPrice)}
                  onChangeText={(text) =>
                    updateFilter('minPrice', Number(text) || 0)
                  }
                  className="px-4 bg-white dark:bg-neutral-800 rounded-xl text-black dark:text-white"
                />
              </View>
              <View>
                <Label title="Max" className="text-secondary-200" />
                <TextInput
                  keyboardType="numeric"
                  value={String(filters.maxPrice)}
                  onChangeText={(text) =>
                    updateFilter('maxPrice', Number(text) || 0)
                  }
                  className="px-4 bg-white dark:bg-neutral-800 rounded-xl text-black dark:text-white"
                />
              </View>
            </Grid>
          </View>

          <View>
            <Label title="Guest" />
            <NumberPicker
              value={filters.guestCount}
              onChange={(val) => updateFilter('guestCount', val)}
            />
          </View>

          <View>
            <Label title="Bed" />
            <NumberPicker
              value={filters.bedCount}
              onChange={(val) => updateFilter('bedCount', val)}
            />
          </View>

          <View>
            <Label title="Bathroom" />
            <NumberPicker
              value={filters.bathCount}
              onChange={(val) => updateFilter('bathCount', val)}
            />
          </View>

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
    );
  }
);

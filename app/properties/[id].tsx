import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { getAminityIcon } from '@/actions/get-amenity-icon';
import { getProperty } from '@/actions/get-property';

import { Button } from '@/components/ui/button';
import { Grid } from '@/components/ui/grid';
import { Label } from '@/components/ui/label';
import { Title } from '@/components/ui/title';

import { useFavorites } from '@/hooks/use-favorites';
import { useTheme } from '@/hooks/use-theme';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';

type IoniconName = keyof typeof MaterialCommunityIcons.glyphMap;

type PropertyInfoCardProps = {
  title: string;
  value: number;
  iconName: IoniconName;
  isDarkMode: boolean;
};

const PropertyInfoCard = ({
  title,
  value,
  iconName,
  isDarkMode,
}: PropertyInfoCardProps) => {
  return (
    <View className="p-4 bg-white dark:bg-accent-default rounded-xl">
      <MaterialCommunityIcons
        name={iconName}
        size={24}
        color={isDarkMode ? 'white' : 'dark'}
      />
      <Label title={title} />
      <Text className="font-medium text-black dark:text-white">{value}</Text>
    </View>
  );
};

export default function DetailScreen() {
  const { theme } = useTheme();
  const { id } = useLocalSearchParams();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const data = getProperty(id);
  const isDarkMode = theme === 'dark';
  const isItemFavorite = isFavorite(data?.id ?? '');

  if (!data) return null;

  const toggleFavorite = () => {
    if (isItemFavorite) {
      removeFavorite(data.id);
    } else {
      addFavorite(data);
    }
  };

  return (
    <View className="flex-1 bg-secondary-100 dark:bg-accent-200 relative">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <Image
          source={data.image}
          transition={500}
          style={{
            width: '100%',
            height: 350,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />

        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-12 left-4 p-2 bg-white dark:bg-accent-default rounded-full"
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={20}
            color={isDarkMode ? 'white' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleFavorite}
          className="absolute top-12 right-4 p-2 bg-white dark:bg-accent-default rounded-full"
        >
          {isItemFavorite ? (
            <MaterialCommunityIcons name="heart" size={20} color="red" />
          ) : (
            <MaterialCommunityIcons
              name="heart-outline"
              size={20}
              color={isDarkMode ? 'white' : 'black'}
            />
          )}
        </TouchableOpacity>

        <View className="p-4 gap-y-8">
          <View className="gap-y-2">
            <Text className="font-medium text-secondary-200">{data.type}</Text>
            <Text className="text-2xl font-bold text-blue-500 underline underline-offset-4">
              ₱{data.price.toLocaleString()}/night
            </Text>
            <View className="flex-row items-center gap-x-2">
              <Octicons name="location" size={15} color="#808080" />
              <Text className="text-secondary-200">{data.address}</Text>
            </View>
          </View>

          <Grid columns={3} spacing={8}>
            <PropertyInfoCard
              title="Guest"
              value={data.guestCount}
              iconName="account-supervisor-outline"
              isDarkMode={isDarkMode}
            />
            <PropertyInfoCard
              title="Bed"
              value={data.bedCount}
              iconName="bed-king-outline"
              isDarkMode={isDarkMode}
            />
            <PropertyInfoCard
              title="Bathroom"
              value={data.bathCount}
              iconName="shower"
              isDarkMode={isDarkMode}
            />
          </Grid>

          <View className="gap-y-2">
            <Title title={data.title} />
            <Text className="text-secondary-200">{data.description}</Text>
          </View>

          <View className="gap-y-2">
            <Title title="Amenities" />
            <View className="flex-row flex-wrap gap-2">
              {data.amenities?.map((amenity) => (
                <View
                  key={amenity}
                  className="py-2 px-4 bg-white dark:bg-accent-default rounded-full flex-row items-center gap-x-2"
                >
                  {getAminityIcon(amenity)}
                  <Text className="text-secondary-200">{amenity}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <Grid columns={2} spacing={8} className="absolute bottom-0 p-4">
        <Button title="Message Host" variant="secondary" />
        <Button title="Reserve" />
      </Grid>
    </View>
  );
}
0;

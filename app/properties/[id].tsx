import { router, useLocalSearchParams } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { getAminityIcon } from '@/actions/get-amenity-icon';
import { getProperty } from '@/actions/get-property';

import { Grid } from '@/components/ui/grid';

import { useFavorites } from '@/hooks/use-favorites';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const data = getProperty(id);
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
    <View className="relative">
      <Image src={data.image} className="w-full aspect-square" />

      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-12 left-4 p-1 bg-background rounded-md"
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleFavorite}
        className="absolute top-12 right-4 p-1 bg-background rounded-md"
      >
        {isItemFavorite ? (
          <Ionicons name="heart" size={24} color="red" />
        ) : (
          <Ionicons name="heart-outline" size={24} color="black" />
        )}
      </TouchableOpacity>

      <View className="p-4 gap-y-8">
        <View className="flex flex-row justify-between">
          <View>
            <Text className="text-lg font-bold">{data.title}</Text>
            <Text className="text-mutedForeground">{data.address}</Text>
          </View>
          <Text className="text-lg font-bold text-orange-500">
            ₱{data.price.toLocaleString()}
          </Text>
        </View>

        <Grid columns={2} spacing={8}>
          {data.amenities.map((amenity) => (
            <View
              key={amenity}
              className="py-4 px-2 border border-border rounded-xl flex-row items-center gap-x-2"
            >
              {getAminityIcon(amenity)}
              <Text className="font-medium">{amenity}</Text>
            </View>
          ))}
        </Grid>

        <Text>{data.description}</Text>
      </View>
    </View>
  );
}

import { router, useLocalSearchParams } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { getAminityIcon } from '@/actions/get-amenity-icon';
import { getProperty } from '@/actions/get-property';

import { Grid } from '@/components/ui/grid';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();

  const property = getProperty(id);

  return (
    <View className="relative">
      <Image
        src="https://a0.muscache.com/im/pictures/miso/Hosting-1047032175710730595/original/f1e6fa1e-ede7-43f5-86de-83ca5b8fdd47.jpeg?im_w=1200"
        className="w-full aspect-square"
      />

      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-12 left-4 p-1 bg-background rounded-md"
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity className="absolute top-12 right-4 p-1 bg-background rounded-md">
        {property?.isFavorite ? (
          <Ionicons name="heart" size={24} color="red" />
        ) : (
          <Ionicons name="heart-outline" size={24} color="black" />
        )}
      </TouchableOpacity>

      <View className="p-4 gap-y-8">
        <View className="flex flex-row justify-between">
          <View>
            <Text className="text-lg font-bold">{property?.title}</Text>
            <Text className="text-mutedForeground">{property?.address}</Text>
          </View>
          <Text className="text-lg font-bold text-orange-500">
            ₱{property?.price.toLocaleString()}
          </Text>
        </View>

        <Grid columns={2} spacing={8}>
          {property?.amenities.map((amenity) => (
            <View
              key={amenity}
              className="py-4 px-2 border border-border rounded-xl flex-row items-center gap-x-2"
            >
              {getAminityIcon(amenity)}
              <Text className="font-medium">{amenity}</Text>
            </View>
          ))}
        </Grid>

        <Text>{property?.description}</Text>
      </View>
    </View>
  );
}

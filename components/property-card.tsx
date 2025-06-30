import { Image, Text, TouchableOpacity, View } from 'react-native';

import type { tProperty } from '@/types/property';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const PropertyCard = ({
  id,
  image,
  title,
  location,
  price,
  isFavorite,
}: tProperty) => {
  return (
    <TouchableOpacity className="gap-y-2 relative">
      <Image src={image} className="w-full aspect-video rounded-xl" />

      <TouchableOpacity className="absolute top-4 left-4">
        <MaterialIcons
          name={isFavorite ? 'favorite' : 'favorite-outline'}
          size={24}
          color="black"
        />
      </TouchableOpacity>

      <View className="flex flex-row justify-between">
        <View>
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-mutedForeground">{location}</Text>
        </View>
        <Text className="text-lg font-bold text-orange-500">
          ₱{price.toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

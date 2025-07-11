import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { useFavorites } from '@/hooks/use-favorites';
import type { tProperty } from '@/types/property';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  data: tProperty;
};

export const PropertyCard = ({ data }: Props) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const isItemFavorite = isFavorite(data.id);

  const toggleFavorite = () => {
    if (isItemFavorite) {
      removeFavorite(data.id);
    } else {
      addFavorite(data);
    }
  };

  return (
    <Animated.View entering={FadeInDown}>
      <Link
        href={{
          pathname: '/properties/[id]',
          params: { id: data.id },
        }}
        asChild
      >
        <TouchableOpacity className="bg-white dark:bg-accent-default rounded-xl relative mb-4">
          <Image
            source={data.image}
            transition={500}
            style={{
              width: '100%',
              height: 200,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />

          <TouchableOpacity
            onPress={toggleFavorite}
            className="absolute top-4 right-4"
          >
            {isItemFavorite ? (
              <MaterialIcons name="favorite" size={24} color="red" />
            ) : (
              <MaterialIcons name="favorite-outline" size={24} color="black" />
            )}
          </TouchableOpacity>

          <View className="p-4 flex flex-row justify-between">
            <View>
              <Text className="font-medium text-black dark:text-white">
                {data.title}
              </Text>
              <Text className="text-secondary-200">{data.location}</Text>
            </View>
            <Text className="font-bold text-blue-500 underline underline-offset-4">
              ₱{data.price.toLocaleString()}
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    </Animated.View>
  );
};

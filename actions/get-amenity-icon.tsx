import Ionicons from '@expo/vector-icons/Ionicons';

type IoniconName = keyof typeof Ionicons.glyphMap;

const iconMap: Record<string, { name: IoniconName }> = {
  Garage: { name: 'car-outline' },
  'Swimming Pool': { name: 'water-outline' },
  Garden: { name: 'leaf-outline' },
  Gym: { name: 'barbell-outline' },
  '24/7 Security': { name: 'shield-checkmark-outline' },
  Parking: { name: 'car-sport-outline' },
};

export const getAminityIcon = (label: string) => {
  if (iconMap[label]) {
    const { name } = iconMap[label];
    return <Ionicons name={name} size={24} color="black" />;
  }

  return <Ionicons name="alert-circle-outline" size={24} color="black" />;
};
